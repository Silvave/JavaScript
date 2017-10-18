function validateRequest(requestObject) {
    const rgxRequestObj = {
        method: /^GET|POST|DELETE|CONNECT$/,
        uri: /^[\w.]+|\*$/,
        version: /^HTTP\/(0\.9|1\.0|1\.1|2\.0)$/,
        message: /^[^<>\\&'"]*$/
    }

    for (let key of Object.keys(rgxRequestObj)) {
        let requestParam
        if (key === 'uri') {
            requestParam = 'URI'
        } else {
            requestParam = key[0].toUpperCase() + key.slice(1)
        }

        if (!requestObject.hasOwnProperty(key) ||
            !rgxRequestObj[key].test(requestObject[key])) {
            throw new Error(`Invalid request header: Invalid ${requestParam}`)
        }
    }

    return requestObject
}

// Judge tests
// Invalid input
// let result = validateRequest({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// })

let result = validateRequest({
    method: 'DELETE',
    version: 'HTTP/1.1',
    message: '-recursive'
})

console.log(result)

// Valid input
// let result = validateRequest({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
// })
//
// console.log(result)
