
function secretData(arr) {
    let regex =
        /(\*[A-Z][A-Za-z]*(?= |\t|\n|$))|(\+[0-9\-]{10}(?=\s|$))|(![A-Za-z0-9]+(?=\s|$))|(_[A-Za-z0-9]+(?=\s|$))/g;

    return arr.join(`\n`).replace(regex, x => `|`.repeat(x.length))
}

console.log(secretData([`Agent *Ivankov was in the room when it all happened.`,
    `The person in the room was heavily armed.`,
    `Agent *Ivankov had to act quick in order.`,
    `He picked up his phone and called some unknown number.`,
    `I think it was +555-49-796`,
    `I can't really remember...`,
    `He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base __Aurora21
Then after that he disappeared from my sight.`,
    `As if he vanished in the shadows.`,
    `A moment, shorter than a second, later, I saw the person flying off the top floor.`,
    `I really don't know what happened there.`,
    `This is all I saw, that night.`,
    `I cannot explain it myself...`]));