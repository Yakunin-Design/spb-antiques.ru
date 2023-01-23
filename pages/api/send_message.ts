// ts-nocheck ignores all ts errors in the file
// @ts-nocheck

import formidable from "formidable";
import { sendMessages, sendPhoto } from "@/lib/tgBot";
import TelegramBot from "node-telegram-bot-api";

export const config = {
    api: {
        bodyParser: false,
    },
};

const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });

export default async (req, res) => {
    const form = new formidable.IncomingForm();
    const files = [];
    const fields = {};

    form.on("field", function (field, value) {
        fields[field] = value;
    })
        .on("file", function (field, file) {
            files.push(file);
        })
        .on("end", function () {
            sendPhoto(bot, files);
            sendMessages(bot, fields);
        });
    form.parse(req);
    res.send(200);
};
