
function numsToStr([num]) {
    let str = ``;
    for (let i = 1; i <= Number(num); i++) {
        str += i;
    }
    return str
}

console.log(numsToStr([`11`]));