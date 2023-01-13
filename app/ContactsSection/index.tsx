import styles from "./contacts.module.css";
import Spacer from "@/components/std/Spacer";

export default function ContactsSection() {
    return (
        <>
            <h2>Как связаться?</h2>
            <section>
                <Spacer top="2" />
                <div>
                    <p className={styles.type}>Email</p>
                    <p className={styles.text}>contact@antiques.com</p>
                </div>
                <div className={styles.contact}>
                    <p className={styles.type}>Наш номер телефона</p>
                    <p className={styles.text}>+7 911 123 45 67</p>
                </div>
                <div className={styles.contact}>
                    <p className={styles.type}>Альтернативные варианты связи</p>
                    <p className={styles.text}>whats up</p>
                </div>
            </section>
        </>
    );
}
