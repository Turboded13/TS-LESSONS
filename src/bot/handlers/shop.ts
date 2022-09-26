import { Sex } from "../../Types";
import { Employee, Post } from "../../Types/employee";
import { Composer } from "telegraf";
import { Product } from "../../Types/product";
import emp from "./emp";
import { Shop } from "../../Types/shop";
import { ContextWithArgs } from "../../Types/bot";

const emps: {[name: string]: Employee} = {}

const products: {[name: string]: Product} = {}

const shops: {[name: string]: Shop} = {}


/*
    TODO:
     1) Написать parseCommandArgs, которая кладет аргументы команд в ctx.args. 
        /addEmp Artem Kazancev ... -> ctx.args = ['Artem', 'Kazancev']
     2) Отрефакторить команды
 */


export default new Composer<ContextWithArgs>()
    // .use(parseCommandArgs)
    .command('addEmp', async ctx => {
        ctx.args 
        let data = ctx.message.text.split(' ') // инкапсулиовать в мидлвару
        let emp1 = new Employee(data[1], data[2], +data[3], data[4] as Sex, data[5]=='true', data[6] as Post)
        emps[data[1]] = emp1
    })
    .command('getEmp', async ctx => {
        await ctx.reply(`${Object.keys(emps)}`)
    })
    .command('addProduct', async ctx => {
        let data = ctx.message.text.split(' ')
        products[data[1]] = new Product(data[1], +data[2], +data[3])
    })
    .command('addShop', async ctx =>{
        let data = ctx.message.text.split(' ')
        let data_prods = data[4].split(',')
        let prods1: Product[] = []
        data_prods.forEach(name => {
            if (name in products) prods1.push(products[name])
        })
        let data_emps = data[5].split(',')
        let emps1: Employee[] = []
        data_emps.forEach(value => {
            if (value in Object.keys(emps)) emps1.push(emps[value])
        })
        let shop1 = new Shop(data[1], +data[2], +data[3], prods1, emps1);
        console.log(shop1);
        shops[data[1]] = shop1 
    })
    .command('getShops', async ctx => {
        await ctx.reply(`${Object.keys(shops)}`)
    })
    .command('delProd', async ctx => {
        let data = ctx.message.text.split(' ').slice(1);
        
        if (!Object.keys(products).length) {
            return await ctx.reply('Все продукты отправили на фронт')
        }
        
        data.forEach(value => (Reflect.deleteProperty(products, value)))
        
        await ctx.reply('Удалено успешно')
    })
    .command('getProds', async ctx => {
        let data = ctx.message.text.split(' ')[1]
        await ctx.reply(`${Object.keys(products)}`)
    })
    .command('delEmp', async ctx => {
        let data = ctx.message.text.split(' ')
        if (data.length <= 0) {await ctx.reply('Всех работников мобилизовали')}
        if (data.length == 1) {Reflect.deleteProperty(emps, data[1])} else {
            data.forEach(value => (Reflect.deleteProperty(emps, value)))
        }
        await ctx.reply('Удалено успешно')
    })
    .command('delShop', async ctx => {
        let data = ctx.message.text.split(' ')
        if (data.length <= 0) {await ctx.reply('Все магазины закрыли')}
        if (data.length == 1) {Reflect.deleteProperty(shops, data[1])} else {
            data.forEach(value => (Reflect.deleteProperty(shops, value)))
        }
        await ctx.reply('Удалено успешно')
    })