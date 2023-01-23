import TelegramBot from "node-telegram-bot-api";

type text_data = {
    position: string;
    tel: string;
    mail: string;
};

const chat_id = process.env.CHAT_ID!;

const message = {
    name: "Название: ",
    tel: "\nНомер телефона: ",
    mail: "\nПочта: ",
};

const sendMessages = (bot: TelegramBot, text_data: text_data) => {
    const msg =
        "Новое Предлжение! \n\n\n" +
        message.name +
        text_data.position +
        message.tel +
        text_data.tel +
        message.mail +
        text_data.mail;

    bot.sendMessage(chat_id, msg).then(() => {
        console.log("Text sended");
    });
};

const sendPhoto = (bot: TelegramBot, imgUrls: any) => {
    imgUrls.forEach((img: any) => {
        bot.sendPhoto(chat_id, img.filepath).then(() => {
            console.log("Photo sended");
        });
    });
};

export { sendMessages, sendPhoto };
