
// let sortArray = (function() {
//     let sortingObj = {
//         asc: (arr) => arr.sort((a,b) => a-b),
//         desc: (arr) => arr.sort((a,b) => b-a)
//     };
//     return (arr, sortMethod) => sortingObj[sortMethod](arr.map(Number))
// })();

// function sortArr(arr, method) {
//     let sortingMethods = function(method) {
//         if (method == "asc") return (a,b) => a-b;
//         else return (a,b) => b-a;
//     };
//     return arr.sort(sortingMethods(method))
// }

function sortingArray(arr, method) {
    let sorting = {
        asc: Array.apply(null, arr.sort((a,b) => a - b)),
        desc: Array.apply(null, arr.sort((a,b) => b - a))
    };
    return sorting[method];
}

// For Judge overkill
// function sortArray(arr, sortMethod) {
//     let ascComparator = function (a,b) {
//         return a-b
//     };
//
//     let descComparator = function (a,b) {
//         return b-a
//     };
//
//     let sortingObj = {
//         asc: ascComparator,
//         desc: descComparator
//     };
//
//     return arr.map(Number).sort(sortingObj[sortMethod])
// }

console.log(sortingArray([1.5, 0, 0, 1, -2, 8], 'asc'));
console.log(sortingArray([14, 7, 17, 6, 8], 'desc'));