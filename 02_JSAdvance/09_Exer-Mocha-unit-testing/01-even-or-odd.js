
function isEvenOrOdd(arg) {
    if (typeof(arg) !== 'string') {
        return undefined;
    }
    if (arg.length % 2 == 0) {
        return 'even'
    }
    if (arg.length % 2 == 1) {
        return 'odd'
    }
}

module.exports = { isEvenOrOdd };