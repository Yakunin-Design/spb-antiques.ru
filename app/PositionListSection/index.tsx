import Spacer from "@/components/std/Spacer";
import CardLarge from "./CardLarge";
import CardSmall from "./CardSmall";
import styles from "./list.module.css";

export default function PositionList() {
    return (
        <div>
            <h2>Какой антиквариат мы покупаем?</h2>
            <Spacer top="2" />
            <section className={styles.section}>
                <div className={styles.row}>
                    <div className={styles.cards_min}>
                        <CardSmall title="Книги" />
                        <CardSmall title="Рукописи" />
                        <CardSmall title="Собрания" />
                    </div>
                    <CardLarge title="Мебель" price={1000} />
                </div>
                <div className={styles.row + " " + styles.middle}>
                    <CardLarge title="Фарфоровые изделия" price={1000} />
                    <div className={styles.cards_min}>
                        <CardSmall title="Картины" />
                        <CardSmall title="Иконы" />
                        <CardSmall title="Графика" />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.cards_min}>
                        <CardSmall title="Игрушки" />
                        <CardSmall title="Открытки" />
                        <CardSmall title="Фотографии" />
                    </div>
                    <CardLarge title="И многое другое" price={1000} />
                </div>
            </section>
        </div>
    );
}
