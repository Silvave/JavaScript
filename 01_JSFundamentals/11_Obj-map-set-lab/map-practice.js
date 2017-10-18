
let map = new Map();
let str = "asdasd";
let str2 = "Burgas";

map.set(str, 2);
map.set("1234", 6);
map.set("1f2f", 7);
// map.set(str, map.get(str) + 8)
console.log(map);
let obj = { "Medenrudnik": 20000, "Zornica": 10000, "Vyzrajdane": 15000 };
// console.log(Object.keys(obj));

// for (let key in obj.keys()) {
//     console.log(key)
// }
let matrix = [...Object.keys(obj).map(key => [key, obj[key]])];
// // let kvArray = [["asdwaef", "sadf"], ["wdgw", "hadj"]];
// console.log(matrix);
console.log(Object.entries(obj));
map.set(str2, new Map(matrix));
console.log(map);
// console.log(map);
//
// map.get(str2).set("asd", 2);
// map.get(str2).set("asd", map.get(str2).get("asd") + 2);
//
// // map.set(str, map.get(str) + 1);
//
// console.log(map);
//
// // map[str] = 5;
// map[str] = 6;
// console.log(map)
