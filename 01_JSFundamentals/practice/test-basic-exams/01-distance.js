
function solution(arr) {
    let [ carSpeed, firstTimeMinutes, secondTimeMinutes, thirdTimeMinutes ] = arr.map(Number);
    let firstDistance = carSpeed*(firstTimeMinutes /60);
    let speedUp = carSpeed + carSpeed * 0.1;
    let secondDistance = speedUp * (secondTimeMinutes /60);
    let thirdDistance = (speedUp - speedUp * 0.05)*(thirdTimeMinutes / 60);
    let result = firstDistance + secondDistance + thirdDistance;

    console.log(`${result.toFixed(2)}`);
}

solution([90, 60, 70, 80]);