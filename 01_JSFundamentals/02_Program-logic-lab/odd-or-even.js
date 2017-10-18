
function oddOrEven(num) {
    let result = num % 2;
    console.log( result == 0 ? `even` : result == Math.round(result) ? `odd` : `invalid`)
}

oddOrEven([3.1]);