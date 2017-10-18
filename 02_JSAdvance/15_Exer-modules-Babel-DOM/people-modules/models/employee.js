let counter = -1

export default class Employee {
    constructor(name, age){
        if (new.target === Employee){
            throw new Error(`Cannot instantiate directly.`)
        }
        this.name = name;
        this.age = Number(age);
        this.salary = 0;
        this.tasks = []
    }

    work(){
        counter++;
        console.log(`${this.name} ${this.tasks[counter % this.tasks.length]}`)
    }

    payCheck(){
        return this.salary
    }

    collectSalary(){
        console.log(`${this.name} received ${this.payCheck()} this month.`)
    }
}