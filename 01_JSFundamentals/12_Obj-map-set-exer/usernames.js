function getSortedUniqueUsernames(arrInput) {
    let uniqueUsernames = new Set(arrInput)

    return [...uniqueUsernames]
        .sort((a, b) => {
            if (a.length === b.length) {
                return a.localeCompare(b)
            }
            return a.length - b.length
        })
        .join('\n')
}

// Judge tests
// let output = getSortedUniqueUsernames([
//     'Ashton',
//     'Kutcher',
//     'Ariel',
//     'Lilly',
//     'Keyden',
//     'Aizen',
//     'Billy',
//     'Braston'
// ])
//
// console.log(output)

let output = getSortedUniqueUsernames([
    'Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'
])

console.log(output)