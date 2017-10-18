function cityMarket(arr) {
    let marketMap = arr
        .map(row => row.split(/[\->:]+/).map(w => w.trim()))
        .reduce((map, row) => populateMarketMap(map, row), new Map())
    
    function populateMarketMap(map, townInfoArr) {
        let [town, product, salesAmount, price] = townInfoArr

        if (!map.has(town)) {
            map.set(town, new Map())
        }
        if (!map.get(town).has(product)) {
            map.get(town).set(product, 0)
        }
        map.get(town).set(product, Number(salesAmount) * Number(price))

        return map
    }

    for (let town of [...marketMap.keys()]) {
        console.log(`Town - ${town}`)

        for (let [product, income] of marketMap.get(town)) {
            console.log(`$$$${product} : ${income}`)
        }
    }
}

cityMarket([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
])