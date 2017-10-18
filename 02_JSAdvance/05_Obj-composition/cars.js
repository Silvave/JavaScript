
function cars(strArr) {
    let map = new Map;

    let commandObj = (() => {
        function create([name, token,parent]) {
            if (!token) {
                map.set(name, {});
                return
            }
            map.set(name, Object.create(map.get(parent)))
        }

        function set([name, key, value]) {
            map.get(name)[key] = value;
        }

        function print([name]) {
            let obj = map.get(name);
            let result = [];
            for (let prop in obj) {
                result.push(`${prop}:${obj[prop]}`)
            }
            console.log(result.join(`, `));
        }
        return { create, set, print }
    })();

    for (let str of strArr){
        let data = str.split(/\s+/);
        let action = data.shift();
        commandObj[action](data)
    }
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);