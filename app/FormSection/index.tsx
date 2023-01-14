"use client";
import styles from "./form.module.css";
import Spacer from "@/components/std/Spacer";
import { useState } from "react";

export default function FormSection() {
    const [form_data, set_form_data] = useState({
        position: "",
        tel: "",
        mail: "",
        photo: [],
    });
    const [errors, set_errors] = useState<Array<String>>([]);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value, files } = event.target;

        if (name != "photo") {
            set_form_data(prev => {
                return { ...prev, [name]: value };
            });
        } else {
            const reader = new FileReader();
            reader.addEventListener("load", function () {
                if (this.result) {
                    set_form_data(prev_form_data => {
                        return {
                            ...prev_form_data,
                            photo: [...prev_form_data.photo, this.result],
                        };
                    });
                }
            });
            const image = reader.readAsDataURL(files![0]);
        }
    }

    function submit() {
        let error = [];
        if (form_data.position == "") {
            error.push("position");
        }
        if (form_data.mail == "" && form_data.tel == "") {
            error.push("mail");
            error.push("tel");
        }

        if (error.length > 0) {
            set_errors(error);
        } else {
            set_errors([]);
            //send to api
        }
    }

    return (
        <>
            <h2>Онлайн оценка</h2>
            <form>
                <input
                    type="text"
                    name="position"
                    id=""
                    placeholder="Что хотите продать?"
                    className={
                        styles.input +
                        " " +
                        styles.first +
                        " " +
                        (errors.includes("position") ? styles.error : {})
                    }
                    onChange={handleChange}
                />
                <div className={styles.shorts}>
                    <input
                        type="tel"
                        name="tel"
                        id=""
                        placeholder="Ваш телефон"
                        className={
                            styles.input +
                            " " +
                            (errors.includes("tel") ? styles.error : {})
                        }
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="mail"
                        id=""
                        placeholder="Ваш email"
                        className={
                            styles.input +
                            " " +
                            (errors.includes("mail") ? styles.error : {})
                        }
                        onChange={handleChange}
                    />
                </div>
                <input
                    type="file"
                    name="photo"
                    id="fileUpload"
                    accept="image/*"
                    className={styles.hiden}
                    onChange={handleChange}
                />
                <label htmlFor="fileUpload">
                    <p className={styles.photo}>
                        {form_data.photo.length} фото
                    </p>
                </label>
                <p onClick={submit} className={styles.send}>
                    Отправить
                </p>
            </form>
        </>
    );
}
