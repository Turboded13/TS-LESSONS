import { Sex } from ".";

export type Post = 'cashier'| 'manager'
export class Employee{
    constructor(
        public name: string,
        public lastName: string, 
        public age: number, 
        public sex: Sex, 
        public working: boolean, 
        public post: Post
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