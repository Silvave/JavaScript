//
// var resultV2 = ([x, y, xMin, xMax, yMin, yMax].map(Number)) =>
//     x >= xMin && x <= xMax && y >= yMin && y <= yMax ?
//         console.log(`inside`) :
//         console.log(`outside`);

var result = (input) => {
    let [x, y, xMin, xMax, yMin, yMax] = input.map(Number);
    return x >= xMin && x <= xMax && y >= yMin && y <= yMax ?
        console.log(`inside`) :
        console.log(`outside`);
};

result([`8`, `-1`, `2`, `12`, `-3`, `3`]); // if the numbers are in brackets,
result([12.5, -1, 2, 12, -3, 3]);          // they need to be parsed
result([2, -3, 2, 12, -3, 3]);
console.log(`------------------`)
// resultV2([8, -1, 2, 12, -3, 3]);
// resultV2([12.5, -1, 2, 12, -3, 3]);
// resultV2([2, -3, 2, 12, -3, 3]);