function storeProductsCatalogue(arrInputProducts) {
    let firstLettersSet = new Set()

    arrInputProducts = arrInputProducts.map(row => row.split(' : '))

    arrInputProducts.forEach(([product, price]) => firstLettersSet.add(product[0]))

    return [...firstLettersSet]
        .sort()
        .map(letter => {
            let sortedProducts = arrInputProducts
                .filter(([product]) => product[0] === letter)
                .sort((a, b) => a[0].localeCompare(b[0]))
                .map(([product, quantity]) => `  ${product}: ${quantity}`)
                .join('\n')

            return `${letter}\n${sortedProducts}`
        })
        .join('\n')
}

// Judge tests
let output = storeProductsCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])

// console.log(output)

output = storeProductsCatalogue([
    'Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
])

console.log(output)