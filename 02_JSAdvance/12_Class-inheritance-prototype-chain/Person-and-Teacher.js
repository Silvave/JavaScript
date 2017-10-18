
function solve() {
    class Person {
        constructor(name, email){
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email)
            this.subject = subject
        }
    }
    return { Person, Teacher }
}

let Person = solve().Person
let Teacher = solve().Teacher

let p = new Person(`Frank`, `frank@yahoo.com`)
let T = new Teacher(`Fonny`, `fonny@yahoo.com`, `skam`)

console.log(p)
console.log(T)