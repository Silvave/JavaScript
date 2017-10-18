import Employee from './employee'

export default class Manager extends Employee {
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