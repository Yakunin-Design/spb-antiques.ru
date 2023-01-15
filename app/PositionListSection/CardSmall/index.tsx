import styles from "./card.module.css";

export default function CardSmall() {
    return (
        <div className={styles.card}>
            <div className={styles.hidden_text}>
                Это скрытый текст <br />
                Этой страницы
            </div>
            <div className={styles.text}>
                <p>Аэрофотосъемка</p>
            </div>
        </div>
    );
}
