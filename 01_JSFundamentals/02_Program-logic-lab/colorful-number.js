
function colorfulNums(n) {
    let html = `<ul>\n`;
    for (var i = 1; i <= Number(n[0]); i++) {
        let colorStyle = `blue`;
        if (i % 2 == 0){
            html += `    <li><span style='color: ${colorStyle}'>${i}</span></li>\n`
        }
        else{
            colorStyle = `green`;
            html += `    <li><span style='color: ${colorStyle}'>${i}</span></li>\n`
        }
    }
    html += `</ul>`;
    return html
}

console.log(colorfulNums([`10`]));