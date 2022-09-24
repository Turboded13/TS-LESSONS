import { Context } from "telegraf";

export default (ctx: Context, next: () => Promise<void>) => {
    console.log(ctx.updateType);
    console.log(ctx.chat?.id, ctx.message);
    next()
}

