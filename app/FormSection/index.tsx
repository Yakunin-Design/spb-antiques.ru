"use client";
import incoming_send from "@/lib/incoming_send";
import styles from "./form.module.css";
import form_controller from "./form_controller";
import { useSearchParams } from "next/navigation";

export default function FormSection({ className }: { className: string }) {
    const { form_data, handleChange, handleSubmit, errors } = form_controller();

    const searchParams = useSearchParams().get("s");
    searchParams == "ya" ? incoming_send("ya") : incoming_send();

    return (
        <div className={className}>
            <h2>Онлайн оценка</h2>
            <form
                onSubmit={handleSubmit}
                method="POST"
                encType="multipart/form-data"
            >
                <input
                    type="text"
                    name="position"
                    id=""
                    placeholder="Что хотите продать?"
                    value={form_data.position}
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
                        value={form_data.tel}
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
                        value={form_data.mail}
                    />
                </div>
                <input
                    type="file"
                    name="photo"
                    id="fileUpload"
                    accept="image/*"
                    multiple
                    className={styles.hiden}
                    onChange={handleChange}
                />
                <label htmlFor="fileUpload">
                    <p className={styles.photo}>
                        {form_data.photo.length} фото
                    </p>
                </label>
                <button type="submit" id="send" className={styles.send}>
                    Отправить
                </button>
            </form>
        </div>
    );
}
