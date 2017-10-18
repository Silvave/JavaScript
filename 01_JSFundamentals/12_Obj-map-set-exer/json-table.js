function jsonTable(arrInput) {
    let parsedEmploeesData = arrInput.map(JSON.parse)

    let emplyeesTable = '<table>'

    for (let { name, position, salary } of parsedEmploeesData) {
        emplyeesTable += `
            <tr>
                <td>${name}</td>
                <td>${position}</td>
                <td>${salary}</td>
            <tr>`
    }

    emplyeesTable += '\n</table>'

    return emplyeesTable
}

// Judge tests
let output = jsonTable([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
])

console.log(output)