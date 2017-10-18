
function checkPoint(arr) {
    arr = arr.map(Number);

    let isPointInside = (function() {
            let [x1, x2] = [10, 50];
            let [y1, y2] = [20, 80];
            let [z1, z2] = [15, 50];

        return ( xPoint, yPoint, zPoint ) => (xPoint >= x1 && xPoint <= x2)
        && (yPoint >= y1 && yPoint <= y2)
        && (zPoint >= z1 && zPoint <= z2);
            })();

    getCoordinatesPoint(arr, 0, isPointInside);

    function getCoordinatesPoint(array, startIdx, func) {
        while (array.length > 0) {
            let [ x, y, z ] = array.splice(startIdx, startIdx+3);
            console.log(func( x, y, z ) ? `inside` : `outside`)
        }
    }
}


checkPoint([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]);
console.log(`-`.repeat(30));
checkPoint([10, 20, 15]);