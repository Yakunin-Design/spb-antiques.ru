import { ICardLarge } from "./CardLarge/ICardLarge";
import { ICardSmall } from "./CardSmall/ICardSmall";

import img from "./img/books.jpg";

type props = {
    title: ICardSmall["title"] | ICardLarge["title"];
};

export default function get_image(props: props): string {
    switch (props.title) {
        case "Мебель":
            return img.src;
        case "Фарфоровые изделия":
            return img.src;
        case "И многое другое":
            return img.src;

        case "Книги":
            return img.src;
        case "Рукописи":
            return img.src;
        case "Собрания":
            return img.src;

        case "Картины":
            return img.src;
        case "Иконы":
            return img.src;
        case "Графика":
            return img.src;

        case "Игрушки":
            return img.src;
        case "Открытки":
            return img.src;
        case "Фотографии":
            return img.src;
    }
}
