
function rotateArr(arr) {
    arr = arr.filter(x => typeof x != "function");
    let countRotations = Number(arr.pop())%arr.length; // Make the number smaller
    let count = 0;
    while ( count < countRotations) {
        arr.unshift(arr.pop());
        count++;
    }
    return arr.join(` `)
}

console.log(rotateArr([`2`,`sdfsd`, (() => this.constructor.unshift(1)),`4`,`5`]));