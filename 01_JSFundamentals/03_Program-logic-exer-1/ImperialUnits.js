convertInchesToSmt([36]);

function convertInchesToSmt([inches]) {
    inches = Number(inches);
    let feet = Math.floor(inches / 12);
    let inchesInFoot = inches % 12;
    console.log(`${feet}\'-${inchesInFoot}\"`)
}