
function printArrDelimiter(arr) {
    let delimeier = arr[arr.length-1];
    arr.pop();
    return arr.join(delimeier);
}

console.log(printArrDelimiter([`one`,`two`,`three`,`four`,`five`,`-`]));