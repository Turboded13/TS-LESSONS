"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
class Employee {
    constructor(name, lastName, age, sex, working, post) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.sex = sex;
        this.working = working;
        this.post = post;
    }
    work() {
        console.log(`${this.name} ${this.lastName} начал работу`);
    }
    endWork() {
        console.log(`${this.name} ${this.lastName} закончил работу`);
    }
    greeting() {
        console.log(`Приветствую, меня зовут ${this.name} ${this.lastName}`);
    }
}
let Rybak = new Employee("Дмитрий", "Рыбак", 18, 'm', false, 'cashier');
let Akimov = new Employee('Илья', 'Акимов', 18, 'm', false, 'cashier');
let Sizov = new Employee('Илья', 'Сизов', 18, 'm', false, 'cashier');
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Shop {
    constructor(products, name, employers, startWork, endWork) {
        this.products = products;
        this.name = name;
        this.employers = employers;
        this.startWork = startWork;
        this.endWork = endWork;
    }
    employeeCount() {
        return this.employers.length;
    }
    productsCount() {
        return this.products.length;
    }
    productsPrice() {
        let c = 0;
        this.products.forEach(value => c += value.price);
        return c;
    }
}
let bread = new Product('бородинский', 49);
let milk = new Product('Пискаревское', 79);
let juice = new Product('Рофлик', 19);
let magnit = new Shop([bread, milk], 'Магнит', [Rybak, Akimov, Sizov], 8, 22);
let five = new Shop([bread, juice], 'Пятёрочка', [Rybak, Akimov], 0, 24);
let dixy = new Shop([bread, milk], 'Дикси', [Rybak, Akimov], 0, 25);
let shops = [magnit, dixy, five];
magnit.employeeCount();
magnit.productsCount();
magnit.productsPrice();
function shopList(shops) {
    let m = [];
    shops.forEach(value => m.push(value.productsPrice()));
    let s = (0, lodash_1.max)(m);
    return shops[m.indexOf(Number(s))].name;
}
console.log(shopList(shops));
