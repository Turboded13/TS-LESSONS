"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
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
exports.Employee = Employee;
