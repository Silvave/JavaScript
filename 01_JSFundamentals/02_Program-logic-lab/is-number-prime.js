
function isNumPrime([num]) {
    num = Number(num);
    let prime = true;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0){
            prime = false;
            break;
        }
    }
    return prime && (num > 1);
}