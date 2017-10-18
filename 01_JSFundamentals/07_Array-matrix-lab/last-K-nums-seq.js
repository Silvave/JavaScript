
function sumOfKElementsSeq(arr) {
    let [ seqLength, kElem ] = arr.map(Number);

    let seqNums = [1];
    let index = 0;
    for (var i = 0; i < seqLength-1; i++) {
        seqNums.push(seqNums.slice(index, index+kElem).reduce((a,b) => a+b));
        seqNums.length > kElem ? index++ : false;
    }
    console.log(seqNums.join(` `))
}

sumOfKElementsSeq(['6', '3']);
sumOfKElementsSeq(['8', '2']);