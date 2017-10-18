function* fibonacci(a = 0, b = 1) {
    while (true) {
        let oldA = a
        a = b
        b = oldA + b

        yield a
    }
}

// Judge tests
let fib = fibonacci();

console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);


// let fib = fibonacci();
//
// for (let number of fib) {
//     console.log(number);
// }
