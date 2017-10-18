function storeData(arr) {
    let filteredArr = arr.map(row => row.replace(/(\+|%20)+/g, ` `));

    let queryStrings = filteredArr.map(row =>  extractQueryStrings(row));

    function extractQueryStrings(row) {
        let questionIdx = row.lastIndexOf(`?`);

        if (row.lastIndexOf(`?`) > -1) {
            row = row.substring(questionIdx + 1)
        }

        return row
    }

    // Format query strings
    let splitQueries = queryStrings
        .map(row => row.split(`&`).map(pair => pair.split(`=`).map(s => s.trim())));

    for (let row of splitQueries){
        let map = new Map();

        for (let [k, v] of row){
            if (!map.has(k)){
                map.set(k, [])
            }
            map.get(k).push(v)
        }

        let result = ``;
        for (let k of map.keys()){
            result += `${k}=[${map.get(k).join(`, `)}]`
        }
        console.log(result)
    }
}

// Judge tests
storeData([
    `foo=%20foo%20+++++%20&value=+val&foo+=5+%20+++++%20203%20+++++%20`,
    `foo=poo%20&value=valley&dog=wow+`,
    `url=https://softuni.bg/trainings/coursesinstances/details/1070`,
    `https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=%20+++++%20php`
]);