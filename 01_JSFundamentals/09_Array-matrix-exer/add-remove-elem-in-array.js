
function addRemoveElemInArray(arr) {
    let number = 1;
    let resultArr = [];
    for (let command of arr){
        if (command == "add"){
            resultArr.push(number)
        }
        if (command == "remove"){
            resultArr.pop()
        }
        number++;
    }

    if ( resultArr.length == 0){
        return "Empty"
    } else {
        return resultArr.join(`\n`)
    }
}

console.log(addRemoveElemInArray([`remove`,`remove`,`remove`,`remove`,`remove`]));