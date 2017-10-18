
function findOccOfWord([str, word]) {
    let regex = new RegExp(`\\b${word}\\b`, "gi");
    console.log(regex);
    let newArr = str.match(regex);
    return !newArr ? 0 : newArr.length;
}

console.log(findOccOfWord([`The waterfall was so high, that the child couldn’t see its peak word.`,`the`]));
console.log(findOccOfWord([`How do you plan on achieving that? How? How can you even think of that?`,`21312`]));
console.log(findOccOfWord([`There was one. Therefore I bought it. I wouldn’t buy it otherwise.`,`there`]));