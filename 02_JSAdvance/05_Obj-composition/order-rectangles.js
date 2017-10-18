
function sortRectangles(arrRectsData) {
    function createRect(width, height) {
        let rect = {
        width: width,
        height: height,
        area: () => rect.width * rect.height,
        compareTo: (other) => {
            let result = other.area() - rect.area();
            return result || other.width - rect.width
            }
        };
        return rect
    }

    let arrRects = [];
    for (let arr of arrRectsData){
        let [width, height] = arr;
        let obj = createRect(width, height);
        arrRects.push(obj)
    }

    arrRects.sort((a,b) => a.compareTo.call(a,b));
    return arrRects
}

console.log(sortRectangles([[10,5], [3,20], [5,12]]));