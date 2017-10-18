
function escaping(arr) {
    let escapedCharsArr = arr.map(x => x.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;'));

    let html = `<ul>\n`;
    escapedCharsArr.forEach(x => html+=`  <li>${x}</li>\n`);
    html += `</ul>`;
    return html
}

console.log(escaping(['<b>unescaped text</b>', 'normal text']))