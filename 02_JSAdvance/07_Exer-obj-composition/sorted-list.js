
function sortedList() {
    return (function() {
        let arr = [];

        function add(elem) {
            arr.push(elem);
            arr.sort((a,b) => a - b);
        }

        function remove(index) {
            if (index < 0 || index > arr.length)
                throw new TypeError(`The index is not in the array size!`)
            arr.splice(index, 1);
        }

        function get(index) {
            if (index < 0 || index >= arr.length)
                throw new TypeError(`The index is not in the array size!`);
            return arr[index]
        }

        let obj = { add, remove, get };

        /** This makes property getter */
        // obj.__defineGetter__(`size`, function() { return arr.length });


        /** This does not make property getter but appends it to the prototype of the object */
        // Object.defineProperty(obj, "size", { get: function() { return arr.length } });

        return obj;

        /** This makes property getter */
        // return  { add, remove, get,
        //     get size() {
        //     return arr.length
        // } }
    })();
}

let collection = sortedList()

collection.add(20)
collection.add(9)
collection.add(13)
collection.add(5)
console.log(collection.add(7))
console.log(collection.get(2));
console.log(collection.get(1));
console.log(collection.get(4));
console.log(collection.remove(2));
console.log(collection.add(6))
console.log(collection.remove(2));
console.log(collection.size);
console.log(collection.remove(2));
console.log(collection.size);
console.log(collection);

