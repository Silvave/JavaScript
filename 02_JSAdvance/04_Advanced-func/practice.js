//
// let a = function practice() {
//     return `Welcome pesho`.concat(` and gosho!`)
// }
//
// function test() {
//     return `and gosho`
// }
//
// console.log(a)


// function invokeAll(arrOfFuncs) {
//     for (let func of arrOfFuncs)
//         func();
// }
//
// let err = () => console.error(`fuck`);
//
// invokeAll([ function f() {console.info(f.caller)}, () => console.warn(`the`), err ])

// console.log(function(){ return `5`}.name)

// (function sameResults() {
//     !function w() {
//         console.log(5)
//     }();
//
//     ~function w() {
//         console.log(5)
//     }();
//
//     (function w() {
//         console.log(5)
//     })();
//
//     (function w() {
//         console.log(5)
//     }());
// })();


// let increment = (function() {
//     let counter = 0;
//     console.log(`start counting from ${counter}`);
//     return function() {
//         ++counter;
//         console.log(`next number is ${counter}`)
//     }
// })();
//
// increment()
// increment()
// increment()
// increment()

// let outer = () => {
//     console.log(this)
//     let inner = function() {
//         console.log(this)
//     };
//     inner()
// }
//
// let obj = { name: `Peter`, f: () => { console.log(obj)}};
//
// obj.f();
//
// console.log(Array.isArray([1, 2]))


function solve(arr) {
    let freights = Number(arr[0]);
    let totalCosts = 0;
    let totalTons = 0;
    let microBus = 0;
    let truck = 0;
    let train = 0;
    for (let i = 1; i <= freights; i++)
    {
        let currentFreight = Number(arr[i]);
        if (currentFreight <= 3)
        {
            microBus += currentFreight;
            totalCosts += 200*currentFreight;
        }
        else if (currentFreight <= 11)
        {
            truck += currentFreight;
            totalCosts += 175*currentFreight;
        }
        else
        {
            train += currentFreight;
            totalCosts += 120*currentFreight;
        }
        totalTons += currentFreight;
    }
    console.log(`${(totalCosts/totalTons).toFixed(2)}`);
    console.log(`${(microBus/totalTons*100).toFixed(2)}%`);
    console.log(`${(truck/totalTons*100).toFixed(2)}%`);
    console.log(`${(train/totalTons*100).toFixed(2)}%`);
}

solve([30, 25, "cross-country"]);




