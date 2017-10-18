function solution() {
    class Console {
        static writeLine(){
            if (arguments.length === 1){
                let arg = arguments[0];

                if (typeof (arg) === `string`){
                    console.log(arg)
                }
                else if (typeof (arg) === `object`){
                    console.log(JSON.stringify(arg))
                }
            }
            else {
                let templateStr = arguments[0];
                let parameters = Array.from(arguments).slice(1);

                if (typeof templateStr !== `string`) {
                    throw new TypeError(`Invalid template - not a string format!`)
                }
                else {
                    let numSortedPHArr = templateStr.match(/{\d+}/g).sort(function(a, b) {
                        a = Number(a.slice(1, -1));
                        b = Number(b.slice(1, -1));
                        return a - b
                    });

                    numSortedPHArr = numSortedPHArr.filter((x, idx, self) => idx === self.indexOf(x));

                    if (numSortedPHArr.length < parameters.length) {
                        throw new RangeError(`Invalid input - incorrect amount of given parameters!`)
                    }

                    let lastPHNum = Number(numSortedPHArr[numSortedPHArr.length-1].slice(1, -1));
                    if (lastPHNum > parameters.length - 1) {
                        throw new RangeError(`Invalid placeholder - index out of range!`)
                    }

                    for (let i = 0; i < parameters.length; i++) {
                        let reg = new RegExp("\\"+numSortedPHArr[i], "g");
                        templateStr = templateStr.replace(reg, parameters[i])
                    }
                    console.log(templateStr)
                }
            }
        }
    }

    return {Console}
}

module.exports = {solution}

// Tests
let Console = solution().Console;

Console.writeLine(`The sum of {1} and {0} is {1}{0}`, 3, 8);
Console.writeLine(`The sum of {1} and {0} is {2}`, 3, 8, 11);
Console.writeLine(`The sum of {1} and {0} is {1}{1}`);
Console.writeLine({sentence: `The sum of {1} and {0} is {1}{1}`, num: 3});
