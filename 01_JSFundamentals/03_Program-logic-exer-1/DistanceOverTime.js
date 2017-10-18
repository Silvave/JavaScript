distanceOverTime([0, 60, 3600]);

function distanceOverTime([speedFirstObj, speedSecondObj, timeSeconds]) {
    let travelledDistFirstObj = ((Number(speedFirstObj)*1000)/3600)*timeSeconds;
    let travelledDistSecondObj = ((Number(speedSecondObj)*1000)/3600)*timeSeconds;
    let differenceInDistance = Math.abs(travelledDistFirstObj-travelledDistSecondObj);
    console.log(differenceInDistance)
}