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

    function readFile(file: Blob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.addEventListener("load", function () {
                if (this.result) {
                    set_form_data(prev => {
                        return {
                            ...prev,
                            photo: [...prev.photo, this.result],
                        };
                    });
                }
            });
            reader.readAsDataURL(file);
        });
    }

    async function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value, files } = event.target;

        if (name == "photo") {
            if (files) {
                //@ts-ignore
                const f_list = [...(files as Array<Blob>)];
                await Promise.all(
                    f_list.map(f => {
                        return readFile(f);
                    })
                );
            }
        } else {
            set_form_data(prev => {
                return {
                    ...prev,
                    [name]: value,
                };
            });
        }
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        //@ts-ignore
        const { position, photo, mail, tel } = event.target;

        let error = [];
        if (position.value == "") error.push("position");
        if (mail.value == "" && tel.value == "") {
            error.push("mail");
            error.push("tel");
        }

        if (error.length > 0) {
            set_errors(error);
            return;
        }
        set_errors([]);

        const form = new FormData(event.target as HTMLFormElement);
        console.log(form);
        const send_form_data = await fetch("/api/send_message", {
            method: "POST",
            body: form,
        });
        set_form_data({
            position: "",
            tel: "",
            mail: "",
            photo: [],
        });
        //@ts-ignore
        document.querySelector("#send").innerHTML = "Cпасибо!";
    }

    return {
        form_data,
        errors,
        handleChange,
        handleSubmit,
    };
}
