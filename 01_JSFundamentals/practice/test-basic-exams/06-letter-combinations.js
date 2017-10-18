
function solution([letter1, letter2, letter3]) {
    letter1 = letter1.charCodeAt(0);
    letter2 = letter2.charCodeAt(0);
    let result = [];
    for (let first = letter1; first <= letter2; first++) {
        for (let second = letter1; second <= letter2; second++) {
            for (let third = letter1; third <= letter2; third++) {
                let f = String.fromCharCode(first);
                let s = String.fromCharCode(second);
                let t = String.fromCharCode(third);
                let letterCombination = f+s+t;
                if (!letterCombination.includes(letter3))
                    result.push(letterCombination)
            }
        }
    }
    console.log(result.join(" ") + " " + result.length)
}

solution(["a", "c", "b"]);