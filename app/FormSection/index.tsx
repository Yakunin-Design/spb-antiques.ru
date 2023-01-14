"use client";
import styles from "./form.module.css";
import form_controller from "./form_controller";

export default function FormSection() {
    const { form_data, handleChange, errors, submit } = form_controller();

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
