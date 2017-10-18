
function constructionCrew(worker) {
    if (worker.handsShaking) {
        let medicine = 0.1 * worker.weight * worker.experience;
        worker.bloodAlcoholLevel += medicine;
        worker.handsShaking = false;
    }
    return worker
}

var worker = constructionCrew({ weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: false });

console.log(worker);
// constructionCrew(worker);
