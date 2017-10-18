
function findAllNums(arr) {
    let str = arr.map(row => row.split(/[^\d+]/)).map(x => x.filter(col => col !== ``)).filter(x => x !== ``);
    let result = arr.map(str => str.match(/\d+/g)).filter(row => row);

    return str.map(row => row.join(` `)).join(` `)
}

// (arr) => arr.map(row => row.match(/\d+/g)).filter(x => x).map(row => row.join(` `)).join(` `)

console.log(findAllNums([`The300`,
                        `What is that?`,
                        `I think it’s the 3rd movie.`,
                        `Lets watch it at 22:45`
]));