
function mapSort(map, sortFn) {

    let sortedMap = new Map([...map.entries()].sort(sortFn));
    return sortedMap
}

module.exports = mapSort;