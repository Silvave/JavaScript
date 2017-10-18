
function algorithm(a, b) {
    if (b === 0) {
        return a
    }
    return algorithm(b, a % b)
}

console.log(algorithm(105,252));

// function solution(a, b) {
//     a = Number(a);
//     b = Number(b);
//     while (b > 0){
//         let oldB = b;
//         b = a % b;
//         a = oldB;
//     }
//     return a
// }
