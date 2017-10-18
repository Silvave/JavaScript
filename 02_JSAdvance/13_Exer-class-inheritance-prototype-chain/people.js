
function solve() {
    let counter = -1;

    class Employee {
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

    class Junior extends Employee {
        constructor(name, age){
            super(name, age);
            this.tasks.push('is working on a simple task.');
        }
    }

    class Senior extends Employee {
        constructor(name, age){
            super(name, age);
            this.tasks.push('is working on a complicated task.');
            this.tasks.push('is taking time off work.');
            this.tasks.push('is supervising junior workers.');
        }
    }

    class Manager extends Employee {
        constructor(name, age){
            super(name, age);
            this.dividend = 0;
            this.tasks.push('scheduled a meeting.');
            this.tasks.push('is preparing a quarterly report.');
        }

        payCheck(){
            return this.salary + this.dividend
        }
    }

    return { Employee, Junior, Senior, Manager }
}

let Junior = solve().Junior;
let Senior = solve().Senior;
let Manager = solve().Manager;

let junior = new Junior(`Pesho`, 18);
let senior = new Senior(`Gosho`, 21);
let manager = new Manager(`Maria`, 23);

console.log(junior.tasks)
junior.work()
junior.work()
junior.salary = 2;
junior.collectSalary()
console.log(`-------------------------------------------`)
// console.log(senior.tasks)
// console.log(senior.work())
senior.work()
senior.work()
senior.work()
senior.work()
senior.salary = 100
senior.collectSalary()
console.log(`-------------------------------------------`)
console.log(manager.tasks)
manager.work()
manager.work()
manager.work()
manager.salary = 10
manager.dividend = 12
manager.collectSalary()