function companiesCarsData(arrInput) {
    let brandsCarsDataMap = new Map()

    arrInput = arrInput.map(row => row.split(' | '))

    for (let [ brand, model, quantity ] of arrInput) {
        if (!brandsCarsDataMap.has(brand)) {
            brandsCarsDataMap.set(brand, new Map())
        }

        if (!brandsCarsDataMap.get(brand).has(model)) {
            brandsCarsDataMap.get(brand).set(model, 0)
        }

        let producedModelQuantity = brandsCarsDataMap.get(brand).get(model) + Number(quantity)

        brandsCarsDataMap.get(brand).set(model, producedModelQuantity)
    }

    return [...brandsCarsDataMap.entries()]
        .map(([brand, carsDataMap]) => {
            let carsDataFormatted = [...carsDataMap.entries()]
                .map(([model, quan]) => `###${model} -> ${quan}`)
                .join('\n')

            return `${brand}\n${carsDataFormatted}`
        })
        .join('\n')
}

// Judge tests
let output = companiesCarsData([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
])

console.log(output)