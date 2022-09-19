// import {isEmpty} from "lodash"

import { forEach, max, times } from "lodash";


// console.log('hello world');
// let s = "11";
// function count(str:string):number{
//     return str.length
// }

// console.log(count(s));

// const a:{[name:string]:number} = {
//     kkk: 12
// }

// console.log("Мне", a["sanya"])
// console.log("Мне", a.sanya)
// console.log("Мне", a.ignat)

// let b = a.ignat
// if (a.ignat) console.log("Игнат есть")
// else console.log("Игнатa нет")

// let list = ["a", "b"]

// console.log(typeof list)

// for (let i = 0; i<list.length; i++){
//     console.log(list[i])
// }

// list.forEach(value => console.log(value))

// list.forEach((value, i) => console.log(`${i+1}) ${value}`))

// console.log(isEmpty(a))

type sex = 'm'|'f'
type post = 'cashier'| 'manager'

class Employee{
    constructor(
        public name: string,
        public lastName: string, 
        public age: number, 
        public sex: sex, 
        public working: boolean, 
        public post: post
    ){}
    work(){
        console.log(`${this.name} ${this.lastName} начал работу`);
    }
    endWork(){
        console.log(`${this.name} ${this.lastName} закончил работу`);
    }
    greeting(){
        console.log(`Приветствую, меня зовут ${this.name} ${this.lastName}`);
    }
}

let Rybak = new Employee("Дмитрий", "Рыбак", 18, 'm', false, 'cashier')
let Akimov = new Employee('Илья', 'Акимов', 18, 'm', false, 'cashier')
let Sizov = new Employee('Илья', 'Сизов', 18, 'm', false, 'cashier')

class Product{
    constructor(
        public name: string,
        public price: number
    ){}
}


class Shop{
    constructor(
        public products: Product[],
        public name: string,
        public employers: Employee[],
        public startWork: number,
        public endWork: number
    ){}
    employeeCount(){
        return this.employers.length
    }
    productsCount(){
        return this.products.length
    }
    productsPrice(){
        let c = 0
        this.products.forEach(value => c+=value.price)
        return c
    }
}

let bread = new Product('бородинский', 49)
let milk = new Product('Пискаревское', 79)
let juice = new Product('Рофлик', 19)

let magnit = new Shop([bread, milk], 'Магнит', [Rybak, Akimov, Sizov], 8, 22)
let five = new Shop([bread, juice], 'Пятёрочка', [Rybak, Akimov], 0, 24)
let dixy = new Shop([bread, milk], 'Дикси', [Rybak, Akimov], 0, 25)

let shops:Shop[] = [magnit, dixy, five]

magnit.employeeCount();
magnit.productsCount();
magnit.productsPrice();

function shopList(shops:Shop[]):any{
    let m:number[] = []
    shops.forEach(value => m.push(value.productsPrice()))
    let s = max(m)
    return shops[m.indexOf(Number(s))].name
}

console.log(shopList(shops))

