
function cookTheNumberPot(arr) {
    let numberToCook = Number(arr.shift());

    let cooking = (action,num) => {
        switch (action){
            case `chop`:  num /= 2; break;
            case `dice`:  num = Math.sqrt(num); break;
            case `spice`:  num+=1; break;
            case `bake`:  num*=3; break;
            case `fillet`:  num*=0.80; break;
        }
        return num;
    }

    while (arr.length > 0) {
        let [action] = arr.splice(0,1);
        console.log(numberToCook = cooking(action,numberToCook))
    }
}

cookTheNumberPot([32, `chop`,`chop`, `chop`, `chop`, `chop`]);
cookTheNumberPot([9, `dice`, `spice`, `chop`, `bake`, `fillet`]);