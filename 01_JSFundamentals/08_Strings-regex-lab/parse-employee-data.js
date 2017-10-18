function parseData(input) {
    let output = [];
    let pattern = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;

    input.forEach(function(element) {
        let match = pattern.exec(element);
        if(match) {
            output.push("Name: " + match[1]);
            output.push("Position: " + match[3]);
            output.push("Salary: " + match[2]);
        }
    });
    console.log(output.join("\n"));
}

// Test - index 0,2 are with cyrillic letters (invalid)
parseData([`Isacc - 1000 – CEO`,
`Ivan - 500 - Employee`,
`Peter - 500 – Employee`,
`Pesho - 1234 - CTO`]);