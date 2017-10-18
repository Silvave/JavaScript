function bottleJuices(arrInput) {
    let juicesDataMap = new Map()
    let juiceBottlesOrder = new Set()

    arrInput = arrInput.map(row => row.split(' => '))

    for (let [ juice, quantity ] of arrInput) {
        if (!juicesDataMap.has(juice)) {
            juicesDataMap.set(juice, 0)
        }

        juicesDataMap.set(juice, juicesDataMap.get(juice) + Number(quantity))

        if (juicesDataMap.get(juice) >= 1000) {
            juiceBottlesOrder.add(juice)
        }
    }

    return [...juiceBottlesOrder]
        .map(juice => {
            let quantity = Math.trunc(juicesDataMap.get(juice) / 1000)

            return `${juice} => ${quantity}`
        })
        .join('\n')
}

// Judge tests
let output = bottleJuices([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
])

// console.log(output)

output = bottleJuices([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
])

console.log(output)