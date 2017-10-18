
function funcCalculator([ num1, num2, op ]) {
    [ a, b ] = [num1,num2].map(Number);

    let calc = function( a, b, op ) { return op(a,b) };
    
    let add = function(a,b) { return a+b };
    let substract = function(a,b) { return a-b };
    let multiply = function(a,b) { return a*b };
    let devide = function () { return a/b };

    switch (op){
        case `+`: return calc( a, b, add );
        case `-`: return calc( a, b, substract );
        case `/`: return calc( a, b, devide );
        case `*`: return calc( a, b, multiply );
    }
}

console.log(funcCalculator([`2`, `4`, `+`]));
console.log(funcCalculator([`3`, `3`, `/`]));
console.log(funcCalculator([`18`, `-1`, `*`]));