
function aggregates(arr) {
    let reduce = () => {
        let cloneArr = arr.slice(0);
        return (func) => {
            let result = cloneArr.shift();
            for (let num of cloneArr){
                result = func(result, num);
            }
            return () => result;
        }
    };
    console.log(`Sum = ${reduce()((a,b) => Number(a) + Number(b))()}`);
    console.log(`Min = ${reduce()((a,b) => Number(a) < Number(b) ? a : b)()}`);
    console.log(`Max = ${reduce()((a,b) => Number(a) > Number(b) ? a : b)()}`);
    console.log(`Product = ${reduce()((a,b) => Number(a) * Number(b))()}`);
    console.log(`Join = ${reduce()((a,b) => a.toString() + b)()}`);
}

aggregates([2,3,10,5]);
console.log(`-`.repeat(40));
aggregates([5, -3, 20, 7, 0.5]);