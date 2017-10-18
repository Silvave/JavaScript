
function getDates(input) {
    let pattern = /\b[0-9]{1,2}-[A-Z][a-z]{2}-[0-9]{4}/g;
    let dates = [];
    for(let currentSentence of input) {
        let match = pattern.exec(currentSentence);
        while(match) {
            let date = match[0].split(`-`);
            let str = `${match[0]} (Day: ${date[0]}, Month: ${date[1]}, Year: ${date[2]})`;
            dates.push(str);
            match = pattern.exec(currentSentence);
        }
    }
    console.log(dates.join("\n"));
}

getDates([`1-Jan-1999 is a valid date.`,
   ` So is 01-July-2000.`,
    `I am an awful liar, by the way`,
    `-- Ivo, 281-Sep-2016.]);`]);