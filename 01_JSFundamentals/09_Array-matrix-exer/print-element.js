
function printElements(arr) {
    let elementNum = arr.pop();
    for (let i = 0; i < arr.length; i+=Number(elementNum)){
        console.log(arr[i]);
    }
}

printElements([`dasda`,`asdas`,`uytre`,`qwer`,`mnbvc`,`6`]);