
function extractTextFromParenthesis([text]) {
    let resultArr = [];
    let strIndex = text.indexOf('(');
    while (strIndex > -1) {
        let endIndex = text.indexOf(')', strIndex);
        if (endIndex === -1)
            break;
        let snippet = text.substring(strIndex + 1, endIndex);
        resultArr.push(snippet);
        strIndex = text.indexOf('(', endIndex);
    }
    console.log(resultArr.join(', '));
}

extractTextFromParenthesis(['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)']);