import { Sex } from "../../Types";
import { Employee, Post } from "../../Types/employee";
import { Composer } from "telegraf";
import { Product } from "../../Types/product";
import emp from "./emp";
import { Shop } from "../../Types/shop";

const emps: {[name: string]: Employee} = {}

const products: {[name: string]: Product} = {}

const shops: {[name: string]: Shop} = {}

export default new Composer()
    .command('addEmp', async ctx => {
        let data = ctx.message.text.split(' ')
        let emp1 = new Employee(data[1], data[2], +data[3], data[4] as Sex, data[5]=='true', data[6] as Post)
        emps[data[1]] = emp1
    })
    .command('getEmp', async ctx => {
        await ctx.reply(`${Object.keys(emps)}`)
    })
    .command('addProduct', async ctx => {
        let data = ctx.message.text.split(' ')
        let prod = new Product(data[1], +data[2], +data[3])
        products[data[1]] = prod
    })
    .command('addShop', async ctx =>{
        let data = ctx.message.text.split(' ')
        let data_prods = data[4].split(',')
        let prods1: Product[] = []
        data_prods.forEach(value => {
            if (value in Object.keys(products)) {prods1.push(products.value)} else {}
        })
        let data_emps = data[5].split(',')
        let emps1: Employee[] = []
        data_emps.forEach(value => {
            if (value in Object.keys(emps)) {emps1.push(emps.value)} else {
                //pass
            }
        })
        let shop1 = new Shop(data[1], +data[2], +data[3], prods1, emps1)
        shops[data[1]] = shop1 
    })
    .command('getShops', async ctx => {
        await ctx.reply(`${Object.keys(shops)}`)
    })
    .command('delProd', async ctx => {
        let data = ctx.message.text.split(' ')
        if (data.length <= 0) {await ctx.reply('Все продукты отправили на фронт')}
        if (data.length < 1) {Reflect.deleteProperty(products, data[1])} else {
            data.forEach(value => (Reflect.deleteProperty(products, value)))
        }
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