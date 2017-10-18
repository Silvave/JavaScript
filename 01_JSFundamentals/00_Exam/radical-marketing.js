function radicalMarketing(arr) {
    let map = new Map();

    let personsPattern = /^([A-Z]+)$/;
    let subsPattern = /^([A-Z]+)-([A-Z]+)$/;

    let patterns = [ personsPattern, subsPattern ];

    for (let row of arr) {
        for (let pattern of patterns) {
            let match = row.match(pattern);

            if (match){
                fillMap( match, map )
            }
        }
    }

    function fillMap( match, map ) {
        if(match.length === 2){
            let person = match[1];

            if (!map.has(person)){
                map.set(person, new Map());
                map.get(person).set(`subs`, []);
                map.get(person).set(`subscribedTo`, []);
            }
        }
        else {
            let person = match[1];
            let subscribedPerson = match[2];

            if (map.has(person) && map.has(subscribedPerson)){
                let realSub = person !== subscribedPerson;

                if (realSub){
                    map.get(subscribedPerson).get(`subs`).push(person);
                    map.get(person).get(`subscribedTo`).push(subscribedPerson)
                }
            }
        }
    }

    let sortMap = [...map.keys()].sort((a,b) => sortUniverse(a,b,map));

    function sortUniverse(a, b, map) {
        let firstSubs = map.get(a).get(`subs`).length;
        let secondSubs = map.get(b).get(`subs`).length;

        if ( firstSubs === secondSubs ){
            let firstM = map.get(a).get(`subscribedTo`).length;
            let secondM = map.get(b).get(`subscribedTo`).length;

            return secondM - firstM
        }

        return secondSubs - firstSubs
    }

    let mostFamous = ''
    if (sortMap.length) {
        mostFamous = sortMap[0]
    }

    console.log(mostFamous);

    let index = 1;
    for (let sub of map.get(mostFamous).get(`subs`)){
        console.log(`${index}. ${sub}`);
        index++;
    }
}

// Judge tests
radicalMarketing([
    `J`,
    `G`,
    `P`,
    `R`,
    `C`,
    `J-G`,
    `G-J`,
    `P-R`,
    `R-P`,
    `C-J`
]);
console.log(`-`.repeat(40));
radicalMarketing([
    `A`,
    `B`,
    `C`,
    `D`,
    `A-B`,
    `B-A`,
    `C-A`,
    `D-A`
]);