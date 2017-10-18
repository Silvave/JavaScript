
function sortArray(arr) {
    return arr.sort().sort((a,b) => a.length-b.length).join(`\n`)
}

console.log(sortArray([`test`,`Deny`,`omen`,`Default`,`Dafault`]));
console.log(`----------------------`);
console.log(sortArray([`alpha`,`beta`,`gamma`]));
console.log(`----------------------`);
console.log(sortArray([`Isacc`,`Theodor`,`Jack`,`Harrison`,`George`]));