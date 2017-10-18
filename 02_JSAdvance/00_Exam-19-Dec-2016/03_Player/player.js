
class Player {
    constructor(name) {
        this.nickname = name;
        this.scores = []
    }
    addScore(score) {
        if (typeof(score) === "string" && score !== "")
        score = Number(score);
        if (Number.isInteger(score)) {
            this.scores.push(score)
        }
        this.scores.sort((a,b) => b-a);
        return this
    }
    get scoreCount() {
        return this.scores.length;
    }
    get highestScore() {
        return this.scores[0]
    }
    get topFiveScore() {
        return this.scores.slice(0,5)
    }
    toString() {
        return `${this.nickname}: [${this.scores.sort((a,b) => b-a)}]`
    }
}


let peter = new Player("Peter");
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);

peter.addScore(450);
peter.addScore(200);
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);

peter.addScore("");
peter.addScore(false);
peter.addScore(true);
peter.addScore(undefined);
peter.addScore(2000);
peter.addScore(300);
peter.addScore(50);
peter.addScore("700");
peter.addScore("700");
peter.addScore("123.12");
peter.addScore("Pesho");

console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);

console.log();
let maria = new Player("Maria")
    .addScore(350)
    .addScore(779)
    .addScore(180)
    .addScore(null)
    .addScore("")
    .addScore(true)
    .addScore(false)
    .addScore(undefined)
    .addScore([])
    .addScore({});
console.log('Highest score: ' + maria.highestScore);
console.log(`Top 5 score: [${maria.topFiveScore}]`);
console.log('' + maria);