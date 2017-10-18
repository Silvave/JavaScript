
// Judge excepts - (arr) => Math.max.apply(Math, arr);

var findBiggestNum = (arr) => Math.min.apply(Math, arr);

console.log(findBiggestNum([10, 200, 21]));
console.log(findBiggestNum([5, -5, 7]));
console.log(findBiggestNum([43, 43.2, 43.1]));
console.log(findBiggestNum([43, 43, 43]));
console.log(findBiggestNum([-10, -20, -30]));