function* reverseArrayGenerator(arrInput) {
    for (let i = arrInput.length - 1; i >= 0; i--) {
        yield arrInput[i]
    }
}

// Judge tests
let arr = [10, 20, 30, 40, 50, 60, 'test'];
let result = reverseArrayGenerator(arr)

console.log(result.next().value)
console.log(result.next().value)
console.log(result.next().value)
console.log('-'.repeat(40))

for (let item of result) {
    console.log(item);
}
