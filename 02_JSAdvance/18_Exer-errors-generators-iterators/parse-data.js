function makeCandy(arrInput) {
    let recipes = []

    const recipeInputDataRgx = /^([^:]+):([^:]*):([^:]*)$/

    const toppingsArr = [
        'milk chocolate', 'white chocolate', 'dark chocolate'
    ]
    const fillingsArr = [
        'hazelnut', 'caramel', 'strawberry', 'blueberry', 'yogurt', 'fudge'
    ]
    const bannedSpicesArr = [
        'poison', 'asbestos'
    ]

    let Candy = class {
        constructor(topping, filling, spice) {
            this.setTopping = topping
            this.setFilling = filling
            this.setSpice = spice
        }

        set setTopping(topping) {
            if (!toppingsArr.includes(topping)) {
                throw new TypeError('Invalid topping')
            }

            this.topping = topping
        }

        set setFilling(filling) {
            let fillingIngredientsArr = filling.split(',')
            let numberOfTypesOfFillings = fillingIngredientsArr.length
            let isFillingValid = fillingIngredientsArr.every(f => fillingsArr.includes(f))

            if (filling && (numberOfTypesOfFillings > 3 || !isFillingValid)) {
                throw new TypeError('Invalid filling')
            }

            this.filling = filling || null
        }

        set setSpice(spice) {
            if (spice && bannedSpicesArr.includes(spice)) {
                throw new TypeError('Invalid spice')
            }

            this.spice = spice || null
        }
    }

    for (let recipeData of arrInput) {
        let match = recipeData.match(recipeInputDataRgx)

        if (match) {
            let topping = match[1]
            let filling = match[2]
            let spice = match[3]

            let recipe
            try {
                recipe = new Candy(topping, filling, spice)
            } catch (ex) {
                continue
            }

            recipes.push(recipe)
        }
    }

    return recipes
}

// Judge test
let candyRecipes = makeCandy([
    'milk chocolate:hazelnut,caramel:pumpkin',
    'dark chocolate::chips',
    'white chocolate::poison',  // invalid
    'white chocolate:fudge:',
    'frosting:yogurt:frosting', // invalid
    'dark chocolate:blueberry:rock crystals'
])

console.log(candyRecipes)
