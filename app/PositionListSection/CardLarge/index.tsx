import get_image from "../get_image";
import styles from "./card.module.css";
import { ICardLarge } from "./ICardLarge";

export default function CardLarge(props: ICardLarge) {

    const image_path = get_image(props);
    const style = {
        backgroundImage: `url(${image_path})`,
    };
    
    return (
        <div className={styles.card} style={style}>
            <div className={styles.main}>
                <div className={styles.hidden_text}>
                    Это скрытый текст <br />
                    Этой страницы
                </div>
                <div className={styles.text}>
                    <h3>{props.title}</h3>
                </div>
            </div>
            <div className={styles.price}>
                <p>Средняя цена выкупа:</p>
                <p>{props.price}</p>
            </div>
        </div>
    );
}
