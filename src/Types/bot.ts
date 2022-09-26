import { Context, Telegraf } from "telegraf";
import startHandler from '../bot/handlers/start'
import log from "../bot/middlewares/log";
import isSanya from "../bot/middlewares/parseArgs";
import shop from "../bot/handlers/shop";

export class ContextWithArgs extends Context {
  public args: string[] = [];
}


export default class Bot {
    private bot: Telegraf<ContextWithArgs>;
    constructor(token: string) {
      this.bot = new Telegraf(token);
      this.bot.use(log);
      // this.bot.use(isSanya);
      this.bot.use(shop)
      this.bot.start(startHandler);
      
    }
  
    public launch = async () => this.bot.launch().then(() => console.log(`Bot @${this.bot.botInfo?.username} lauched`));
  }