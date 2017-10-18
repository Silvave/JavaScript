class CheckingAccount {
    constructor (clientId, email, firstName, lastName) {
        this.products = []
        this.clientId = clientId
        this.email = email
        this.setNames = { firstName, lastName }
    }

    get clientId() {
        return this._clientId
    }

    set clientId(id) {
        const rgxId = /^\d{6}$/
        let match = id.match(rgxId)

        if (match) {
            this._clientId = id
        } else {
            throw new TypeError('Client ID must be a 6-digit number')
        }
    }

    get email() {
        return this._email
    }

    set email(email) {
        const rgxEmail = /^\w+@[A-Za-z.]+$/
        let match = email.match(rgxEmail)

        if (match) {
            this._email = email
        } else {
            throw new TypeError('Invalid e-mail')
        }
    }

    get firstName() {
        return this['_firstName']
    }

    get lastName() {
        return this['_lastName']
    }

    set setNames(nameObj) {
        const rgxName = /^[A-Za-z]{3,20}$/

        for (let key of Object.keys(nameObj)) {
            let nameValue = nameObj[key]
            let nameType = key[0].toUpperCase() + key.substring(1, key.length-4)

            if (nameValue.length < 3 || nameValue.length > 20) {
                throw new TypeError(`${nameType} name must be between 3 and 20 characters long`)
            } else if (!nameValue.match(rgxName)) {
                throw new TypeError(`${nameType} name must contain only Latin characters`)
            } else {
                this[`_${key}`] = nameValue
            }
        }
    }
}

// Judge tests
// Error checking
//let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov')
//let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov')
//let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov')
//let acc = new CheckingAccount('131455', 'ivan@some.com', 'Iva', 'Petrov')
//let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')

// Valid input
let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'Petrov')

console.log(acc.clientId)
console.log(acc.email)
console.log(acc.firstName)
console.log(acc.lastName)

