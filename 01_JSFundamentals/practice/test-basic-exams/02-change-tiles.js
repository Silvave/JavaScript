
function solution(arr) {
    let [collectedSum,
        widthFloor,
        heightFloor,
        triangleSide,
        triangleHeight,
        tilePrice,
        workerPrice ] = arr.map(Number);

    let areaFloor = widthFloor * heightFloor;
    let areaSingleTile = (triangleSide * triangleHeight) / 2;
    let neededTiles = Math.ceil(areaFloor/areaSingleTile) + 5;
    let sumTotal = neededTiles * tilePrice + workerPrice;

    if (sumTotal <= collectedSum)
    {
        console.log(`${(collectedSum - sumTotal).toFixed(2)} lv left.`);
    }
    else
    {
        console.log(`You'll need ${(sumTotal - collectedSum).toFixed(2)} lv more.`);
    }
}

solution([1000,
    5.55,
    8.95,
    0.90,
    0.85,
    13.99,
    321
]);