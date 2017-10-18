function townsPopulation(inputArr) {
    let towns = inputArr
        .map(row => row.split(/\s*<->\s*/))
        .reduce((obj, [name, population]) => {
            if (!obj.hasOwnProperty(name)) {
                obj[name] = 0
            }
            obj[name] += Number(population)

            return obj
        }, {})

    console.log(Object.keys(towns).map(name => `${name} : ${towns[name]}`).join('\n'))

    // let townsPopulationMap = new Map()
    //
    // for (let [name, population] of townsMatrix) {
    //     if (!townsPopulationMap.has(name)) {
    //         townsPopulationMap.set(name, 0)
    //     }
    //     townsPopulationMap.set(name, townsPopulationMap.get(name) + population)
    //
    // }

    // console.log([...townsPopulationMap.entries()].map(t => `${t[0]} : ${t[1]}`).join('\n'))
}

// Judge tests
townsPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',
    'Sofia <-> 8300'
])