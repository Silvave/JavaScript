
function printTriangle([num]) {
    for (var i = 0; i <= num*2-1; i++) {
        console.log(i <= num ? '*'.repeat(i) : '*'.repeat(num*2-i))
    }
}

printTriangle([5]);