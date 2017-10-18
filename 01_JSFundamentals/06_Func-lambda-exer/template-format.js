
function printTemplate(arr) {
    let template = `<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n`;

    while (arr.length > 0){
        let [ quest, asw ] = arr.splice(0,2);
        template += `\t<question>\n\t\t${quest}\n\t</question>\n`;
        template += `\t<answer>\n\t\t${asw}\n\t</answer>\n`;
    }
    template += `</quiz>`;

    console.log(template)
}

printTemplate(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton"]);
printTemplate(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
);