
function modifyNumber([num]) {

    let sum = num.toString().split(``).map(Number).reduce((a,b) => a+b);

    while (sum / num.length <= 5){
        sum+=9;
        num+=`9`;
    }
    console.log(num)
}

modifyNumber([`101`]);
modifyNumber([`5835`]);