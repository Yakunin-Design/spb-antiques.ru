import { useState } from "react";

type form_data = {
    position: string;
    tel: string;
    mail: string;
    photo: Array<string | ArrayBuffer | null>;
};

export default function form_controller() {
    const [form_data, set_form_data] = useState<form_data>({
        position: "",
        tel: "",
        mail: "",
        photo: [],
    });

    const [errors, set_errors] = useState<Array<String>>([]);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value, files } = event.target;

        if (name === "photo") {
            const reader = new FileReader();
            reader.addEventListener("load", function () {
                set_form_data(prev => {
                    return {
                        ...prev,
                        [name]: [...prev.photo, this.result],
                    };
                });
            });
        }

        set_form_data(prev => {
            return { ...prev, [name]: value };
        });
    }

    function submit() {
        let error = [];
        if (form_data.position == "") error.push("position");
        if (form_data.mail == "" && form_data.tel == "") {
            error.push("mail");
            error.push("tel");
        }

        if (error.length > 0) {
            set_errors(error);
        } else {
            set_errors([]);
            fetch("/api/send_message", {
                method: "POST",
                body: JSON.stringify(form_data),
            });
        }
    }

    return {
        form_data,
        errors,
        handleChange,
        submit,
    };
}
