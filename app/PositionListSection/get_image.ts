import { ICardLarge } from "./CardLarge/ICardLarge";
import { ICardSmall } from "./CardSmall/ICardSmall";

import furniture from "./img/furniture.webp";
import porcelain from "./img/porcelain.webp";
import other from "./img/other.webp";

import books from "./img/books.webp";
import handwrite from "./img/handwrite.webp";
import collection from "./img/collection.webp";

import painting from "./img/painting.webp";
import icons from "./img/icons.webp";
import graphic from "./img/graphic.webp";

import statue from "./img/statue.webp";
import cards from "./img/cards.webp";
import photos from "./img/photos.webp";

type props = {
    title: ICardSmall["title"] | ICardLarge["title"];
};

export default function get_image(props: props): string {
    switch (props.title) {
        case "Мебель":
            return furniture.src;
        case "Фарфоровые изделия":
            return porcelain.src;
        case "И многое другое":
            return other.src;

        case "Книги":
            return books.src;
        case "Рукописи":
            return handwrite.src;
        case "Собрания":
            return collection.src;

        case "Картины":
            return painting.src;
        case "Иконы":
            return icons.src;
        case "Графика":
            return graphic.src;

        case "Игрушки":
            return statue.src;
        case "Открытки":
            return cards.src;
        case "Фотографии":
            return photos.src;
    }
}
