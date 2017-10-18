
let SortedList = (function () {
    let arr = [];
    return class SortedList {
        constructor() {
            this.size = 0
        }

        get basket() {
            return arr
        }

        isValid(num) {
            if (num < 0 || num >= this.basket.length) {
                throw new Error(`Index out of range`);
            }
        }

        add(elem){
            this.basket.push(elem);
            this.basket.sort((a,b) => a - b);
            this.size+=1;
            return this
        }

        remove(index) {
            this.isValid(index);
            this.basket.splice(index, 1);
            this.size-=1;
            return this
        }

        get(index) {
            this.isValid(index);
            return this.basket[index]
        }
    }
})();


let sortedList = new SortedList()
sortedList.add(10)
sortedList.add(2)
console.log(sortedList.size)
sortedList.add(20)
console.log(sortedList.size)
sortedList.add(18)
sortedList.add(4).remove(4).add(234)

console.log(sortedList.get(2))

sortedList.remove(1)

console.log(sortedList.size)
// class SortedList {
//     constructor() {
//         this.size
//     }
//
//     get size() {
//
//     }
// }