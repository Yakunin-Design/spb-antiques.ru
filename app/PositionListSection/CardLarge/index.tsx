import styles from "./card.module.css";

export default function CardLarge() {
    return (
        <div className={styles.card}>
            <div className={styles.main}>
                <div className={styles.hidden_text}>
                    Это скрытый текст <br />
                    Этой страницы
                </div>
                <div className={styles.text}>
                    <h3>Аэрофотосъемка</h3>
                </div>
            </div>
            <div className={styles.price}>
                <p>Средняя цена выкупа:</p>
                <p>5900</p>
            </div>
        </div>
    );
}
