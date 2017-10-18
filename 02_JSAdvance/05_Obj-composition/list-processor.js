
function listProcessor(arr) {

    let commandProc = (() => {
        let result = [];

        // function add(str) {
        //     result.push(str)
        // }
        //
        // function remove(str) {
        //     result = result.filter(elem => elem != str)
        // }
        //
        // function print() {
        //     console.log(result.join(`,`))
        // }
        //
        // return { add, remove, print }

        return {
            add: (str) => result.push(str),
            remove: (str) => result = result.filter(elem => elem !== str),
            print: () => console.log(result.join(`,`))}
    })();

    for (let str of arr) {
        let [ command, strOcc ] = str.split(/\s+/);
        commandProc[command](strOcc)
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);