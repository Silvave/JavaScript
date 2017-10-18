function formatAngularElem(arr) {
    let appModule = /^\$app='([^']*)'$/;
    let MVC = /^\$(controller|model|view)='([^']+)'&app='([^']*)'$/;

    let regexesPatterns = [ appModule, MVC ];

    let map = new Map();

    for (let line of arr){
        for (let pattern of regexesPatterns){
            let match = line.match(pattern);

            if (match){
                if (match.length === 4){
                    fillMap(match)
                } else if (match.length === 2){
                    checkMapApp(match)
                }
            }
        }
    }

    function fillMap([strMatch, elem, elemName, appName]) {
        if (!map.has(appName)){
            map.set(appName, new Map());
            map.get(appName).set(`controllers`, []);
            map.get(appName).set(`models`, []);
            map.get(appName).set(`views`, []);
            map.get(appName).set(`check`, false);
        }
        map.get(appName).get(elem+`s`).push(elemName);
        map.get(appName).get(elem+`s`).sort()
    }

    function checkMapApp([strMatch, appName]) {
        if (!map.has(appName)){
            map.set(appName, new Map());
            map.get(appName).set(`controllers`, []);
            map.get(appName).set(`models`, []);
            map.get(appName).set(`views`, []);
            map.get(appName).set(`check`, false);
        }
        map.get(appName).set(`check`, true)
    }

    [...map.keys()].forEach(key => {
        if (!map.get(key).get(`check`)) {
            map.delete(key)
        } else {
            map.get(key).delete(`check`)
        }
    });


    let sortedMap = [...map.keys()].sort((a,b) => sortUniverse(a,b));

    function sortUniverse(a, b) {
        let firstC = map.get(a).get(`controllers`).length;
        let secondC = map.get(b).get(`controllers`).length;

        if ( firstC === secondC ){
            let firstM = map.get(a).get(`models`).length;
            let secondM = map.get(b).get(`models`).length;

            return firstM - secondM
        }

        return secondC - firstC
    }

    let resultObj = {};

    for (let module of sortedMap){
        resultObj[module] = {};

        for (let [k,v] of map.get(module)){
            resultObj[module][k] = v
        }
    }

    console.log(JSON.stringify(resultObj))
}

formatAngularElem([
    `$app='Garbage Collector'`,
    `$controller='C#Controller'&app='Language Parser'`,
    `$controller='GarbageController'&app='Garbage Collector'`,
    `$controller='GarbageController'&app='Garbage Collector'`,
    `$controller='GarbageController'&app='Garbage Collector'`,
    `$controller='SpamController'&app='Garbage Collector'`,
    `$app='Language Parser'`,
    `$controller='PHPController'&app='Language Parser'`,
    `$model='GarbageController'&app='Garbage Collector'`,
    `$controller='JavaController'&app='Language Parser'`,
    `$controller='C++Controller'&app='Language Parser'`
]);