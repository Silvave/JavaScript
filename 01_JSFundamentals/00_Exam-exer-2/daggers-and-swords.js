function swordOrDagger(arr) {
    let roundedNumsArr = arr.map(Number).map(num => Math.floor(num));
    
    
    function determineBlade(num) {

        let bladeOrDagger = `dagger`;
        if (num > 40){
            bladeOrDagger = `sword`;
        }

        let bladeLength = num % 5;
        let bladeType;

        switch (bladeLength){
            case 1: bladeType = `blade`; break;
            case 2: bladeType = `quite a blade`; break;
            case 3: bladeType = `pants-scraper`; break;
            case 4: bladeType = `frog-butcher`; break;
            default: bladeType = `*rap-poker`; break;
        }

        return [ bladeOrDagger, bladeType ]
    }

    let html = `<table border="1">\n<thead>\n`;
    html += `<tr><th colspan="3">Blades</th></tr>\n`
    html += `<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n</thead>\n`;
    html += `<tbody>\n`;

    for (let num of roundedNumsArr) {
        if (num <= 10) {
            continue
        }

        let [ bladeOrDagger, bladeType ] = determineBlade(num);

        html += `<tr><td>${num}</td><td>${bladeOrDagger}</td><td>${bladeType}</td></tr>\n`
    }

    html += `</tbody>\n`;
    html += `</table>`;

    console.log(html)
}

// Judge tests
swordOrDagger([`17.8`,
    `19.4`,
    `13`,
    `55.8`,
    `126.96541651`,
    `3`
]);