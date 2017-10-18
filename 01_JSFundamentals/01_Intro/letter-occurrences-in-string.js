
function letterOccur([str, letter]) {
    let letterCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter)
            letterCount++;
    }
    return letterCount
}

console.log(letterOccur([`hello`, `l`]));