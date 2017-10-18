
let solution = (function() {
    return {
        add: ([ x1, y1 ], [ x2, y2 ]) => [ Number(x1) + Number(x2), Number(y1) + Number(y2) ],
        multiply: ([ x1, y1 ], s ) => [ Number(x1) * Number(s), Number(y1) * Number(s) ],
        length: ([ x1, y1 ]) => Math.sqrt(Number(x1)*Number(x1) + Number(y1)*Number(y1)),
        dot: ([ x1, y1 ], [ x2, y2 ]) => Number(x1) * Number(x2) + Number(y1) * Number(y2),
        cross: ([ x1, y1 ], [ x2, y2 ]) => Number(x1) * Number(y2) - Number(x2) * Number(y1)
    }
})();

console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));

