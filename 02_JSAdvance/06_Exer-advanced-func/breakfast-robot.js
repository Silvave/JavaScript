
let solution = (function() {
    let objRecipes = {
        apple: {carbohydrate: 1, flavour: 2},
        coke: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        omelet: {protein: 5, fat: 1, flavour: 1},
        cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };

    let objIngredients = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };

    function restock( arg, quantity ) {
        objIngredients[arg] += quantity;
        return `Success`
    }

    function prepare( arg, quantity ) {
        let countRecipes = 0;
        let cloneObj = {};
        Object.assign(cloneObj, objIngredients);
        while (countRecipes < quantity) {
            for (let elem in objRecipes[arg]) {
                cloneObj[elem] -= objRecipes[arg][elem];
                if (cloneObj[elem] < 0) {
                    return `Error: not enough ${elem} in stock`
                }
            }
            countRecipes++
        }
        Object.assign(objIngredients, cloneObj);
        return `Success`
    }

    function report() {
        return Object.keys(objIngredients).map(key => key + `=` + objIngredients[key]).join(` `)
    }

    return (str) => {
        let [ command, arg, quantity ] = str.split(/\s+/);
        quantity = Number(quantity);

        if (command == "restock") {
            return restock( arg, quantity );
        }
        else if (command == "prepare")
            return prepare( arg, quantity );
        else
            return report()
    }
})();

// solution("restock carbohydrate 10");
// solution("restock flavour 10");
// solution("prepare cheverme 2");

// solution("restock flavour 50");
// solution("prepare coke 4");
// solution("report");

console.log(solution(`restock carbohydrate 10`));
console.log(solution(`restock flavour 10`));
console.log(solution(`prepare apple 1`));
console.log(solution(`restock fat 10`));
console.log(solution(`prepare burger 1`));
console.log(solution(`report`));

// solution(`prepare cheverme 1`);
// solution(`restock protein 10`);
// solution(`prepare cheverme 1`);
// solution(`restock carbohydrate 10`);
// solution(`prepare cheverme 1`);
// solution(`restock fat 10`);
// solution(`prepare cheverme 1`);
// solution(`restock flavour 10`);
// solution(`prepare cheverme 1`);
// solution(`report`);

