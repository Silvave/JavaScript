areaAndPerimeter([`2.5`, `3.14`]);

function areaAndPerimeter([l , w]) {
    let area = l * w;
    let perimeter = 2*(Number(l) + Number(w));
    console.log(`${area.toFixed(2)}\n${perimeter.toFixed(2)}`)
}