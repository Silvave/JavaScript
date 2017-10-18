
function fib(n) {
    let result = [];

    let fibonacci = (function() {
        return (num1,num2) => {
            result.push(num2);
            return n-- > 1 ? fibonacci(num2,num1+num2) : false;
        }
    })();
    fibonacci(0,1);

    return result
}


console.log(fib(15));
