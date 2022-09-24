import { Context } from "telegraf";

export default async (ctx: Context, next: () => Promise<void>) => {
    if (ctx.chat?.id == 825197397){
        await ctx.reply('ты саня')
        return next()
    }
    await ctx.reply('ты не саня')
    
}