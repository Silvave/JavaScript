function fromJSONToHTMLTable(input){
    let namePriceArr = JSON.parse(input);

    let objKeys = Object.keys(namePriceArr[0])

    let html = "<table>\n  <tr>";

    for (let key of objKeys) {
        html += `<th>${key}</th>`
    }
    html += '</tr>\n'

    function htmlEscape(text) {
        let replaced = text.toString();
        replaced = replaced.split('&').join('&amp;');
        replaced = replaced.split('<').join('&lt;');
        replaced = replaced.split('>').join('&gt;');
        replaced = replaced.split('"').join('&quot;');
        replaced = replaced.split('\'').join('&#39;');
        return replaced;
    }

    for (let obj of namePriceArr){
        html += `  <tr>`;
        for (let key of objKeys) {
            html += `<td>${htmlEscape(obj[key])}</td>`;
        }
        html += `</tr>\n`;
    }
    return html + "</table>";
}

// Judge tests
// let output = fromJSONToHTMLTable(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);
//
// console.log(output)