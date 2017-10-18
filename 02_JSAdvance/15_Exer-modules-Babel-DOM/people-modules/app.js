// require("babel-register");

// import Employee from './models/employee'
import Junior from './models/junior'
import Manager from './models/manager'
import Senior from './models/senior'

// Attach classes to result object for Judge
// result.Employee = Employee
// result.Junior = Junior
// result.Manager = Manager
// result.Senior = Senior

// Tests
// let employee = new Employee(`Misho`, 21);
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