
function printSqareOfStars([num]) {
    num = Number(num);
    let html = ``;
    for (var i = 0; i < num; i++) {
        html += (i < num-1 ? `*${' *'.repeat(num-1)}\n` : `*${' *'.repeat(num-1)}`)
    }
    console.log(html)
}

printSqareOfStars([3]);