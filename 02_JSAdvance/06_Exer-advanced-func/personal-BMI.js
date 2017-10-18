
function solve( name, age, weight, height ) {
    let cloneHeight = Number(height) / 100;
    let bodyMassIdx = Number(weight) / (cloneHeight * cloneHeight);

    let status;
    if (bodyMassIdx < 18.5) status = "underweight";
    else if (bodyMassIdx < 25) status = "normal";
    else if (bodyMassIdx < 30) status = "overweight";
    else status = "obese";

    age = Math.round(age);
    weight = Math.round(weight);
    height = Math.round(height);
    bodyMassIdx = Math.round(bodyMassIdx);

    let obj = {
        name: name,
        personalInfo: { age, weight, height },
        BMI: bodyMassIdx,
        status: status
    };

    if (obj.status == "obese") {
        obj.recommendation = "admission required";
    }

    return obj
}

console.log(solve(`Peter`, 29, 75, 182));
console.log(`-`.repeat(40));
console.log(solve(`Honey Boo Boo`, 9, 57, 137));