
function manageOre(arr) {
    arr = arr.map(Number);
    let targetThickness = arr.shift();

    function processing(ore, op) {
        if (op == `Cut`) ore /= 4;
        else if (op == `Lap`) ore *= 0.80;
        else if (op == `Grind`) ore -= 20;
        else if (op == `Etch`) ore -= 2;
        else if (op == `X-ray`) ore += 1;

        return ore;
    }

    function processOre( ore,target ) {
        let methodsArr = [ `Cut`, `Lap`, `Grind`, `Etch`, `X-ray` ];
        console.log(`Processing chunk ${ore} microns`);

        let index = 0;
        let prevMethod = null;
        let timesProcessed = 0;
        let sentinel = true;
        while (ore >= target-1){
            let [method] = methodsArr.slice(index, index+1); // Changing ore process methods

            if ((method != prevMethod && prevMethod != null && sentinel) ||
                (method == `X-ray` && sentinel == false)){
                if (timesProcessed > 0)
                    console.log(`${prevMethod} x${timesProcessed}`);
                if (method == `X-ray` && sentinel == false)
                    break;
                if (timesProcessed > 0)
                    console.log(`Transporting and washing`);
                ore = Math.floor(ore); // Why always needs to be rounded? Test 5 is wrong if it is in the "if" above
                timesProcessed = 0;
                sentinel = false;
            }

            let newOreMineralCount = processing(ore, method);
            if (newOreMineralCount >= target-1) {
                if (method == `X-ray`){
                    prevMethod = method;
                    sentinel = false;
                    if (ore == target - 1) {
                        ore = newOreMineralCount;
                        timesProcessed++;
                    }
                } else {
                    ore = newOreMineralCount;
                    timesProcessed++;
                }
            } else {
                index++;
                sentinel = true;
                prevMethod = method;
            }
        }
        return ore;
    }

    while (arr.length > 0){
        let ore = arr.splice(0,1);
        ore = processOre(ore, targetThickness);
        console.log(`Finished crystal ${ore} microns`)
    }
}

manageOre([`1375`, `50000`]);
console.log(`-`.repeat(50));
manageOre([`1000`, `8100`]);
console.log(`-`.repeat(50));
manageOre([`100`, `101.9`]);