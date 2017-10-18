function heroicInventory(arrInput) {
    let heroesData = []

    for (let rowStr of arrInput) {
        let [name, level, ...items] = rowStr.split(/[\s/,]+/).filter(e => e !== '')

        let heroObj = {
            name,
            level: Number(level),
            items
        }

        heroesData.push(heroObj)
    }

    return JSON.stringify(heroesData)
}

// Judge tests
let output = heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])

console.log(output)