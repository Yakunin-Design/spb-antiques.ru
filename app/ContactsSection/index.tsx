import styles from "./contacts.module.css";
import Spacer from "@/components/std/Spacer";

export default function ContactsSection({ className }: { className: string }) {
    return (
        <div className={className} id="contacts">
            <h2>Как связаться?</h2>
            <section>
                <Spacer top="2" />
                <div>
                    <p className={styles.type}>Email</p>
                    <a
                        className={styles.text}
                        href="mailto: spb.antikvariat@gmail.com"
                    >
                        spb.antikvariat@gmail.com
                    </a>
                </div>
                <div className={styles.contact}>
                    <p className={styles.type}>Наш номер телефона</p>
                    <a className={styles.text} href="tel:+79119588070">
                        +7 (911) 958 80 71
                    </a>
                </div>
                <div className={styles.contact}>
                    <p className={styles.type}>Альтернативные варианты связи</p>
                    <a
                        className={styles.text}
                        target="_blank"
                        href="https://api.whatsapp.com/send?phone=79119588070"
                    >
                        whats up
                    </a>
                </div>
            </section>
        </div>
    );
}
