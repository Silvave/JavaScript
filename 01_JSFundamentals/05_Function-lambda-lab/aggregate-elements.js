function aggregateElements(input) {
    let elements = input.map(Number);
    aggregate(elements, 0, (a,b) => a+b);
    aggregate(elements, 0, (a,b) => a+1/b);
    aggregate(elements, ``, (a,b) => a+b);
    
    function aggregate(arr, InitVal, func) {
        let val = InitVal;
        for (var i = 0; i < arr.length; i++) {
            val = func(val, arr[i])
        }
        console.log(val)
    }

    let elmn = [];
    elmn.push(elements.reduce((a,b) => a+b));
    elmn.push(elements.map(x => 1/x).reduce((a,b) => a+b));
    elmn.push(elements.reduce((a,b) => ``+a+b));
    console.log(elmn.join(`\n`))
}

aggregateElements([10,20,30]);