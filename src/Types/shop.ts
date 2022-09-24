import { Employee } from "./employee"
import { Product } from "./product"

export class Shop{
    constructor(
        public name: string,
        public startWork: number,
        public endWork: number,
        public products: Product[],
        public employers: Employee[]
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


