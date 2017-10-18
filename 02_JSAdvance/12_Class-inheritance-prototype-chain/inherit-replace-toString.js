
function solve() {
    class PersonN {
        constructor(name, email){
            this.name = name;
            this.email = email;
        }

        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`
        }
    }

    class Teacher extends PersonN {
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject
        }

        toString() {
            return super.toString().slice(0, -1) + `, subject: ${this.subject})`
        }
    }

    class Student extends PersonN {
        constructor(name, email, course){
            super(name, email);
            this.course = course;
        }

        toString() {
            return super.toString().slice(0, -1) + `, course: ${this.course})`
        }


    }
    return { PersonN, Teacher, Student }
}

let Person = solve().PersonN
let Teacher = solve().Teacher
let Student = solve().Student

let p = new Person(`Jo Montana`, `montana@abv.bg`)
let t = new Teacher(`Frank`, `frank@yahoo.com`, `math`)
let s = new Student(`Fat Bo`, `fat_bo@gmail.com`, `cooking`)

console.log(p.toString())
console.log(t.toString())
console.log(s.toString())