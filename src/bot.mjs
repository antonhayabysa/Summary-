import "grammy-debug-edge";
import {mongo} from "./db.mjs";
import {Bot, session} from "grammy";
import {MongoDBAdapter} from "@grammyjs/storage-mongodb";

export const {

    // Telegram bot token from t.me/BotFather
    TELEGRAM_BOT_TOKEN: token,

    // Secret token to validate incoming updates
    TELEGRAM_SECRET_TOKEN: secretToken = String(token).split(":").pop()

} = process.env;

// Default grammY bot instance
export const bot = new Bot(token);

bot.use(session({
    storage: new MongoDBAdapter({
        collection: mongo.db("Bot").collection("Sessions")
    }),
}));

// Sample handler for a simple echo bot
bot.on("message:text", ctx => ctx.reply(ctx.msg.text));
