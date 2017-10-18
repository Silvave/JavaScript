function systemsComponentsData(arrInput) {
    let systemsMap = new Map()

    arrInput = arrInput.map(row => row.split(' | '))

    for (let [system, component, subcomponent] of arrInput) {
        if (!systemsMap.has(system)) {
            systemsMap.set(system, new Map())
        }

        if (!systemsMap.get(system).has(component)) {
            systemsMap.get(system).set(component, [])
        }

        systemsMap.get(system).get(component).push(subcomponent)
    }

    function sortSystems(first, second) {
        let firstSystem = first[0].toLowerCase()
        let secondSystem = second[0].toLowerCase()

        let amountComponentFirst = first[1].size
        let amountComponentSecond = second[1].size

        if (amountComponentFirst === amountComponentSecond) {
            return firstSystem.localeCompare(secondSystem)
        }

        return amountComponentSecond - amountComponentFirst
    }

    return [...systemsMap.entries()]
        .sort(sortSystems)
        .map(([system, componentsMap]) => {
            let componentsDataFormatted = [...componentsMap.entries()]
                .sort(([c1, arrA], [c2, arrB]) => arrB.length - arrA.length)
                .map(([comp, subComArr]) => {
                    let subComponentsFormat = subComArr.map(s => `||||||${s}`).join('\n')

                    return `|||${comp}\n${subComponentsFormat}`
                })
                .join('\n')

            return `${system}\n${componentsDataFormatted}`
        })
        .join('\n')
}

// Judge tests
let output = systemsComponentsData([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
])

console.log(output)
