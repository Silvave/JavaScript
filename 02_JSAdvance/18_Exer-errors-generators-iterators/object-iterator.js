function makeIterable(objInput) {
    let index = 0
    let objKeys = Object.keys(objInput).sort((a, b) => b.localeCompare(a))

    return {
        [Symbol.iterator]: function() {
            return this
        },
        next: () => {
            if (index < objKeys.length) {
                return { value: objKeys[index++], done: false }
            }

            return { done: true }
        }
    }
}

// Judge tests
// let obj = {
//     age: 27,
//     name: "pesho",
//     book: "Lord of the Rings"
// }
//
// let iterator = makeIterable(obj)
//
// while(true) {
//     let res = iterator.next()
//
//     if (res.done) {
//         break;
//     }
//
//     console.log(res.value)
// }

let obj = {
    name: "gosho",
    "13": true,
    book: "Lord of the Drinks",
    2: 2,
    age: 15,
    passportNumber: 12345678
}

let iterator = makeIterable(obj)

while(true){
    let res = iterator.next()

    if(res.done) {
        break
    }

    console.log(res.value);
}

