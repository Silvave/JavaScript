
function checkForTreasures(arr) {
    arr = arr.map(Number);

    let treasurePositions = (function() {
        let islandsLocations = {};
        islandsLocations.Tuvalu = { x1: 1, x2: 3, y1: 1, y2: 3};
        islandsLocations.Tonga = { x1: 0, x2: 2, y1: 6, y2: 8};
        islandsLocations.Samoa = { x1: 5, x2: 7, y1: 3, y2: 6};
        islandsLocations.Cook = { x1: 4, x2: 9, y1: 7, y2: 8};
        islandsLocations.Tokelau = { x1: 8, x2: 9, y1: 0, y2: 1};

        return (coordinates) => {
            let [ xTreasure, yTreasure ] = coordinates.slice();
            let mainObj = islandsLocations;
            for (let island of Object.keys(mainObj)) {
                let isTreasureOnIsland = (xTreasure >= mainObj[island].x1 && xTreasure <= mainObj[island].x2) &&
                                         (yTreasure >= mainObj[island].y1 && yTreasure <= mainObj[island].y2);
                if (isTreasureOnIsland) {
                    return island
                }
            }
            return `On the bottom of the ocean`
        };
    })();

    isThereFoundTreasures(arr, treasurePositions);

    function isThereFoundTreasures(array, func) {
        while (array.length > 0) {
            let coordinates = array.splice(0,2);
            console.log(func(coordinates))
        }
    }
}


checkForTreasures([4, 2, 1.5, 6.5, 1, 3]);
console.log(`-`.repeat(40));
checkForTreasures([6, 4]);