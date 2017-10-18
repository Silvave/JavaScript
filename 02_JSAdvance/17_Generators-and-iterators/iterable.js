function reverseArrayIterable(arrInput) {
    let index = arrInput.length - 1

    return {
        [Symbol.iterator]: function() {
            return this
        },
        'next': () => {
            if (index >= 0) {
                return { value: arrInput[index--], done: false }
            } else {
                return { done: true }
            }
        }
    }
}

// Judge tests
for (let x of reverseArrayIterable([10, 20, 30])) {
    console.log(x);
}
