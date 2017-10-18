console.log(createObj(['ssid', '90127461', 'status', 'admin', 'expires', '600']));
function createObj([firstKey, firstValue, secondKey, secondValue, thirdKey, thirdValue]) {
    return {
        [firstKey]: firstValue,
        [secondKey]: secondValue,
        [thirdKey]: thirdValue
    };
}