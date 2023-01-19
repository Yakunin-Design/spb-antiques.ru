import get_image from "../get_image";
import styles from "./card.module.css";
import { ICardSmall } from "./ICardSmall";

export default function CardSmall(props: ICardSmall) {
    
    const image_path = get_image(props);
    const style = {
        backgroundImage: `url(${image_path})`,
    };

    return (
        <div className={styles.card} style={style}>
            <div className={styles.hidden_text}>
                Это скрытый текст <br />
                Этой страницы
            </div>
            <div className={styles.text}>
                <p>{props.title}</p>
            </div>
        </div>
    );
}
