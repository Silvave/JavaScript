
function basicMapOp(arr) {
    let filteredArr = arr.map(row => row.replace(/[$&!#|]/g,``));

    let splitedArr = filteredArr.map(row => row.match(/([A-Z][a-z]+)\s+([0-9]+)/));
    let map = new Map();

    for (let [ arr, name, score ] of splitedArr){
        if (!map.has(name)){
            map.set(name, []);
        }
        // map.set(name, map.get(name)+Number(score)); // When you have to sum values of keys
        map.get(name).push(Number(score))
    }

    let sortedNames = [...map.keys()] != null ? [].sort().sort((a,b) => a.length - b.length) : false;

    sortedNames.forEach(name => console.log(`${name} -> ${map.get(name)} points`));

    for (let name of [...map.keys()].sort().sort((a,b)=> a.length-b.length)){
        console.log(`${name} has ${map.get(name).sort((a,b)=> a-b)} points`)
    }

    // console.log(filteredArr);
    // console.log(splitedArr);
    // console.log(map)
}

basicMapOp([`       MMam$$$&&&&!!!ito     512      `,`Mar$$ia$ 22`,
    `G$$osh$o $11`,`Mar&&&ia 2&!!!4`, `G||||os$$$ho 5`,`Mar####ia 4`,
    `G&&&osh&&o 1`, `Ma$$ri&&&&a 333`, `Go&&&sh&&$$o 92`,`Mamito 51`,`Mamito 5`]);