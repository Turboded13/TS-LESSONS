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
        let data = ctx.message.text.split(' ')[1]
        if (data in emps) {await ctx.reply(`${emps[data].name}`)} else {await ctx.reply('Работника не существует')}
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