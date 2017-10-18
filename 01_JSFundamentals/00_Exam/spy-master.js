function creep(arr) {
    let specialWord = arr.shift();
    let text = arr;
    let regexStr = `( |^)(${specialWord}\\s+)([!%$#A-Z]{8,})([\\., ]|$)`;
    let regex = new RegExp(regexStr, `ig`);

    for (let index in text){
        text[index] = text[index].replace(regex, function(match, $1, $2, $3, $4) {
            let replaceWord = $3;
            if (replaceWord === replaceWord.toUpperCase()) {
                let newWord = replaceWord.replace(/[!%#$A-Z]/g, cr => switchChars(cr));
                return ($1+$2+newWord+$4)
            }
            return match
        });
        // if (line) {
        //     text[index] = line;
        // }
        // if (match) {
        //     for (let matchedStr of match) {
        //         let [ specWord, replaceWord ] = matchedStr.split(/\s+/).filter(x => x != ``);
        //         if (replaceWord != replaceWord.toUpperCase()) {
        //             continue;
        //         }
        //         let newWord = replaceWord.replace(/[!%#$A-Z]/g, cr => switchChars(cr));
        //         let oldWordRegex = new RegExp(replaceWord, "g");
        //         str = str.replace(oldWordRegex, newWord);
        //     }
    }

    function switchChars(cr) {
        switch (cr){
            case `!`: return 1;
            case `%`: return 2;
            case `#`: return 3;
            case `$`: return 4;
            default: return cr.toLowerCase();
        }
    }

    console.log(text.join(`\n`));
}

// Judge tests
creep([
    'specialKey',
    `In this text the specialKey HELLOWORLD! is correct, but`,
    `the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while`,
    `SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!`
]);
console.log(`-`.repeat(40));
creep([
    `enCode`,
    `Some messages are just not encode WHATTTTT# can you do?`,
    `RE - ENCODE THEMNOW! - he said. eNcoDe BULLL$#!%`,
    `ENCODE THEMNOW! Damn encode BULL$BULL$,, eNcoDe BULL$#!%.`
]);
console.log(`-`.repeat(40));
creep([
    `enCode`,
    `Some messages are just not encode WHATWTT# can you do?`,
    `Damn encode, ITSALLHETHINKSABOUT, !%.`
]);