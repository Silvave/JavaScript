
function wordsToUppercase([str]) {
    let wordsInUpper = str.toUpperCase().split(/\W+/);
    let filteredWords = () => wordsInUpper.filter(w => w != ``);
    return filteredWords().join(`, `)
}

console.log(wordsToUppercase([`.,. Hi, how , ,   !!  ,    are you ! , `]));