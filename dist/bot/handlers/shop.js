"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("../../Types/employee");
const telegraf_1 = require("telegraf");
const product_1 = require("../../Types/product");
const shop_1 = require("../../Types/shop");
const emps = {};
const products = {};
const shops = {};
exports.default = new telegraf_1.Composer()
    .command('addEmp', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    let data = ctx.message.text.split(' ');
    let emp1 = new employee_1.Employee(data[1], data[2], +data[3], data[4], data[5] == 'true', data[6]);
    emps[data[1]] = emp1;
}))
    .command('getEmp', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    let data = ctx.message.text.split(' ')[1];
    if (data in emps) {
        yield ctx.reply(`${emps[data].name}`);
    }
    else {
        yield ctx.reply('Работника не существует');
    }
}))
    .command('addProduct', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    let data = ctx.message.text.split(' ');
    let prod = new product_1.Product(data[1], +data[2], +data[3]);
    products[data[1]] = prod;
}))
    .command('addShop', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    let data = ctx.message.text.split(' ');
    let data_prods = data[4].split(',');
    let prods1 = [];
    data_prods.forEach(value => {
        if (value in Object.keys(products)) {
            prods1.push(products.value);
        }
        else { }
    });
    let data_emps = data[5].split(',');
    let emps1 = [];
    data_emps.forEach(value => {
        if (value in Object.keys(emps)) {
            emps1.push(emps.value);
        }
        else {
        }
    });
    let shop1 = new shop_1.Shop(data[1], +data[2], +data[3], prods1, emps1);
    shops[data[1]] = shop1;
}))
    .command('getShops', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply(`${Object.keys(shops)}`);
}));
