
function areaCircle(r) {
    r = Number(r);
    let area = Math.PI * r * r;
    console.log(area);
    let rountArea = Math.round(area * 100) / 100;
    console.log(rountArea)
}

console.log(areaCircle([`5`]));