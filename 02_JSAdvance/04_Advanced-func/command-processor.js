
function processCommands(arr) {
    let cmdProcessor = (function() {
        let text = ``;
        return {
            append: (newText) => text += newText,
            removeStart: (num) => text = text.substring(Number(num)),
            removeEnd: (num) => text = text.slice(0, -Number(num)),
            print: () => console.log(text)
        }
    })();

    for (let line of arr) {
        let [command, arg] = line.split(/\s+/);
        cmdProcessor[command](arg);
    }
}


processCommands([
    'append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']
);

processCommands([
    'append 123',
    'append 45',
    'removeStart 2',
    'removeEnd 1',
    'print']
);

// cmdProcessor.append(`hello`);
// cmdProcessor.append(`again`);
// cmdProcessor.removeStart(3)
// cmdProcessor.removeEnd(4)
// cmdProcessor.printText()

// cmdProcessor.append(`123`);
// cmdProcessor.append(`45`);
// cmdProcessor.removeStart(2)
// cmdProcessor.removeEnd(1)
// cmdProcessor.printText()