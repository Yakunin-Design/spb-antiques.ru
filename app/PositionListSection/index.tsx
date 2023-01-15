import CardLarge from "./CardLarge";
import CardSmall from "./CardSmall";
import styles from "./list.module.css";
export default function PositionList() {
    return (
        <div>
            <h2>Какой антиквариат мы покупаем?</h2>
            <section className={styles.section}>
                <div className={styles.row}>
                    <div className={styles.cards_min}>
                        <CardSmall />
                        <CardSmall />
                        <CardSmall />
                    </div>
                    <CardLarge />
                </div>
                <div className={styles.row + " " + styles.middle}>
                    <CardLarge />
                    <div className={styles.cards_min}>
                        <CardSmall />
                        <CardSmall />
                        <CardSmall />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.cards_min}>
                        <CardSmall />
                        <CardSmall />
                        <CardSmall />
                    </div>
                    <CardLarge />
                </div>
            </section>
        </div>
    );
}
