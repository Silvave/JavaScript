
function smallestTwoNumsInArr(arr) {
    console.log(arr.map(Number).sort((a,b) => a-b).slice(0,2).join(` `))
}

smallestTwoNumsInArr(['30', '15', '50', '5']);
smallestTwoNumsInArr(['3', '0', '10', '4', '7', '3']);