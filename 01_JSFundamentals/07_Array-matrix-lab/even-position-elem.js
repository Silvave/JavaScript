
function getElements(arr) {
    return arr.filter((x,y) => y % 2 == 0).join(` `)
}

console.log(getElements(['20', '30', '40']));