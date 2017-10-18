distanceIn3D([3.5, 0, 1, 0, 2, -1])
function distanceIn3D(arr) {
    let xFirst = Number(arr[0]);
    let yFirst = Number(arr[1]);
    let zFirst = Number(arr[2]);
    let xSecond = Number(arr[3]);
    let ySecond = Number(arr[4]);
    let zSecond = Number(arr[5]);
    let distX = xFirst - xSecond;
    let distY = yFirst - ySecond;
    let distZ = zFirst - zSecond;

    let distanceBetweenPoints = Math.sqrt(distX*distX + distY*distY + distZ*distZ)

    console.log(distanceBetweenPoints)
}