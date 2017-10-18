function reverseArrayIterator(arrInput) {
    let index = arrInput.length - 1

    return {
        next: () => {
            if (index >= 0) {
                return { value: arrInput[index--], done: false }
            } else {
                return { done: true }
            }
        }
    }
}

// Judge tests
let iterator = reverseArrayIterator([10, 20, 30]);

while (true) {
    let item = iterator.next();
    if (item.done) {
        break;
    }
    console.log(item.value);
}
