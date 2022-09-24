"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
class Shop {
    constructor(name, startWork, endWork, products, employers) {
        this.name = name;
        this.startWork = startWork;
        this.endWork = endWork;
        this.products = products;
        this.employers = employers;
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
exports.Shop = Shop;
