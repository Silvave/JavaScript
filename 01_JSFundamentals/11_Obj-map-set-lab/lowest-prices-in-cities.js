function lowestPriceInCities(arrInput) {
    let mapProductsInfo = new Map()
    let productsSet = new Set()

    let productsInfoArr = arrInput.map(row => row.split(/\s*\|\s*/))

    for (let [town, product, price] of productsInfoArr) {
        productsSet.add(product)

        price = Number(price)
        if (!mapProductsInfo.has(product)) {
            mapProductsInfo.set(product, new Map())
        }
        mapProductsInfo.get(product).set(town, price)
    }

    productsSet.forEach(product => {
        let productInfo = [...mapProductsInfo.get(product).entries()]
        let sortedProductInfo = productInfo.sort((a, b) => a[1] - b[1])
        let [town, price] = sortedProductInfo[0]

        console.log(`${product} -> ${price} (${town})`)
    })
}

// Judge tests
// lowestPriceInCities([
//     'Sample Town | Sample Product | 1000',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10'
// ])

lowestPriceInCities([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
])