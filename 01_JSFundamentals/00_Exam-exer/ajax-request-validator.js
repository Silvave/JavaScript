function ajaxRequestValidator(arrInput) {
    // Remove last row because of Judge
    arrInput.pop()

    let decodingHash = arrInput.pop()
    let hashPatterRgx = /(\d)([A-Za-z])/g
    let hashPatternsArr = decodingHash.match(hashPatterRgx)

    let methodRgx = /^Method: (GET|POST|PUT|DELETE)$/
    let authRgx = /^Credentials: (Basic|Bearer) ([A-Za-z\d]+)$/
    let contentRgx = /^Content: ([A-Za-z\d.]+)$/

    let requestRgxArr = [
        methodRgx,
        authRgx,
        contentRgx
    ]

    let requestMethodsArr = ['POST', 'PUT', 'DELETE']

    let responseMethodTemplate = (method) => `Response-Method:${method}`

    let successResponse = (method, requestHeader) =>
        responseMethodTemplate(method) + `&Code:200&Header:${requestHeader}`

    let invalidFormatRequest = 'Response-Code:400'
    let invalidAuthType = method => responseMethodTemplate(method) + '&Code:401'
    let invalidAuthToken = method => responseMethodTemplate(method) + '&Code:403'

    function isHashedPassValid(hash) {
        for (let pattern of hashPatternsArr) {
            let neededLetterOccurNum = Number(pattern[0])
            let letterRgx = new RegExp(pattern[1], 'g')

            let letterMatches = hash.match(letterRgx) || []

            if (letterMatches.length === neededLetterOccurNum) {
                return true
            }
        }

        return false
    }

    function checkRequestAuth({ method, authType, headerHash, responseMsg }) {
        if (authType === 'Basic' && requestMethodsArr.includes(method)) {
            responseMsg = invalidAuthType(method)
        } else if (!isHashedPassValid(headerHash)) {
            responseMsg = invalidAuthToken(method)
        } else {
            responseMsg = successResponse(method, headerHash)
        }

        return responseMsg
    }

    const REQUEST_METHOD_ROW = 0
    const REQUEST_AUTH_ROW = 1

    // Main logic
    while (arrInput.length) {
        let requestDataArr = arrInput.splice(0, 3)

        let isRequestBodyValid = true

        let requestDataObj = {
            method: '',
            authType: '',
            headerHash: '',
            responseMsg: ''
        }

        for (let i = 0; i < requestDataArr.length; i++) {
            let match = requestDataArr[i].match(requestRgxArr[i])

            if (!match) {
                requestDataObj.responseMsg = invalidFormatRequest
                isRequestBodyValid = false
                break
            }

            if (i === REQUEST_METHOD_ROW) {
                requestDataObj.method = match[1]
            } else if (i === REQUEST_AUTH_ROW) {
                requestDataObj.authType = match[1]
                requestDataObj.headerHash = match[2]
            }
        }

        if (isRequestBodyValid) {
            requestDataObj.responseMsg = checkRequestAuth(requestDataObj)
        }

        console.log(requestDataObj.responseMsg)
    }
}

// Judge tests
ajaxRequestValidator([
    'Method: GET',
    'Credentials: Bearer asd918721jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
    'Content: users.asd.1782452.278asd',
    'Method: POST',
    'Credentials: Basic 028591u3jtndkgwndsdkfjwelfqkjwporjqebhas',
    'Content: Johnathan',
    '0p9w',
    ''
])
//
// ajaxRequestValidator([
//     'Method: PUT',
//     'Credentials: Bearer as9133jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
//     'Content: users.asd/1782452$278///**asd123',
//     'Method: POST',
//     'Credentials: Bearer 028591u3jtndkgwndskfjwelfqkjwporjqebhas',
//     'Content: Johnathan',
//     'Method: DELETE',
//     'Credentials: Bearer 05366u3jtndkgwndssfsfgeryerrrrrryjihvx',
//     'Content: This.is.a.sample.content',
//     '2e5g',
//     ''
// ])