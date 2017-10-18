
function printTable([num]) {
    num = Number(num);
    let html = `<table border="1">\n`;
    for (let i = 0; i <= num; i++) {
        let countNum = i;
        html += `    <tr>`;
        for (let j = 0; j <= num; j++) {
            if (i === 0) {
                if (j === 0) html += `<th>x</th>`;
                else html += `<th>${j}</th>`;
            }
            else {
                if(j === 0)html += `<th>${i}</th>`;
                else {
                    html += `<td>${countNum}</td>`;
                    countNum += i;
                }
            }
        }
        html += `</tr>\n`;
    }
    html += `</table>`;
    return html
}

console.log(printTable([`5`]));