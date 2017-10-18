function organizeNotebook(arr) {
    let getData = arr.map(row => row.split(`|`));

    let map = new Map();

    for (let [color, keyIn, valueIn ] of getData){
        if (!map.has(color)){
            map.set(color, new Map());
            map.get(color).set(`age`, ``);
            map.get(color).set(`name`, ``);
            map.get(color).set(`opponents`, []);
            map.get(color).set(`win`, 1);
            map.get(color).set(`loss`, 1);
        }

        if (keyIn === `name` || keyIn === `age`){
            map.get(color).set(keyIn, valueIn);
        } else {
            map.get(color).get(`opponents`).push(valueIn);
            map.get(color).set(keyIn, map.get(color).get(keyIn)+1);
        }
    }


    for (let color of map.keys()){
        if (map.get(color).get(`name`) === `` || map.get(color).get(`age`) === ``){
            map.delete(color);
            continue
        }

        map.get(color).get(`opponents`).sort();

        let wins = map.get(color).get(`win`);
        let losses = map.get(color).get(`loss`);
        let rank = (wins / losses).toFixed(2);

        map.get(color).set(`rank`, rank);

        map.get(color).delete(`win`);
        map.get(color).delete(`loss`);
    }

    let objResult = {};

    [...map.keys()].sort().forEach(color => fillObj(color));

    function fillObj(color) {
        objResult[color] = {};
        for (let [ k, v ] of map.get(color)){
            objResult[color][k] = v
        }
    }

    console.log(JSON.stringify(objResult))
}

// Judge tests
organizeNotebook([
    `red|age|44`,
    `purple|age|99`,
    `blue|win|pesho`,
    `blue|win|mariya`,
    `purple|loss|Kiko`,
    `purple|loss|Kiko`,
    `purple|loss|Kiko`,
    `purple|loss|Yana`,
    `purple|loss|Yana`,
    `purple|loss|Manov`,
    `purple|loss|Manov`,
    `red|name|gosho`,
    `blue|win|Vladko`,
    `purple|loss|Yana`,
    `purple|name|VladoKaramfilov`,
    `blue|age|21`,
    `blue|loss|Pesho`]);