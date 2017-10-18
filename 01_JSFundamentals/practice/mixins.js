
function mixinsES6() {
    let Person = class {
        constructor(name, age, money) {
            if (new.target === Person) {
                throw new TypeError('Person is an abstract class!')
            }
            this.name = name;
            this.age = age;
            this.money = money;
        }

        get money() {
            return this._money;
        }

        set money(money) {
            this._money = money;
        }

        toString() {
            return `My name is ${this.name} and I am ${this.age} years-old with ${this.money}$ cash in the bank.`
        }
    };

    let addJobs = superClass => {
        return class extends superClass {
            constructor(name, age, money, job) {
                super(name, age, money)
                this.job = job;
            }

            toString() {
                return super.toString() + ` Working at ${this.job}.`
            }
        }
    }

    let Employee = addJobs(Person);

    let bob = new Employee('Bob', 26, 643, 'Telenor');

    console.log(bob.toString())

    let Secret = class {
        constructor(secret) {
            this.secret = secret;
        }
        toString() {
            return `My secret is that I am a ${this.secret}!`
        }
    }

    let addHobbyAndSecret = (superClass, secretClass) => {
        let mySecret;
        return class extends superClass {
            constructor(name, age, money, job, hobby, secret) {
                super(name, age, money, job);
                this.hobby = hobby;
                this.secret = secret;
            }

            get secret() {
                return mySecret;
            }

            set secret(s) {
                if (!(s instanceof secretClass)) {
                    throw new TypeError('That is not a true secret!')
                }
                mySecret = s;
            }

            toString() {
                return super.toString() +
                    ` My hobby is ${this.hobby} and I've a secret - ${"*".repeat(this.secret.toString().length)}!`
            }
        }
    }

    let MegaEmployee = addHobbyAndSecret(Employee, Secret);

    let gosho = new MegaEmployee('Gosho', 12, 897, 'Wendee\'s', 'running', new Secret('weeboo'));

    console.log(gosho.toString())
    console.log(gosho.secret.toString())
}

function mixinsES5() {
    let Person = function(name, age, money) {
        // if (new.target === Person) {
        //     throw new TypeError('Person is an abstract class!')
        // }
        this.name = name;
        this.age = age;
        this.money = money;
    }

    Object.defineProperty(Person.prototype, 'money', {
        get: () => this._money,
        set: (m) => this._money = m
    })

    Person.prototype.toString = function() {
        return `My name is ${this.name} and I am ${this.age} years-old with ${this.money}$ cash in the bank.`
    }

    let misho = new Person('Misho', 28, 2345)

    console.log(misho)
    console.log(misho.toString())


    let addJob = function(oldFunc) {
        // this.job =
    }
}

// mixinsES6()
mixinsES5()
