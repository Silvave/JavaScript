
const appKey = "kid_BJXTsSi-e";
const appSecret = "447b8e7046f048039d95610c1b039390";

const username = "guest";
const password = "guest";
const userBody = JSON.stringify({ username, password });

let queryArg = "Knock Knock.";
const hostUrl = "https://baas.kinvey.com/appdata/kid_BJXTsSi-e/knock?query=";
const hostLoginUrl = "https://baas.kinvey.com/user/kid_BJXTsSi-e/login";

const base64auth = btoa(appKey +":"+ appSecret);
const authHeaders = { "Authorization": "Basic " + base64auth, "Content-type": "application/json" };

let loggedAuthToken = "";
let authLoggedHeaders = () => {
    return { "Authorization": "Kinvey " + loggedAuthToken,
             "Content-type": "application/json" };
};

let knockReq = () => {
    return {
        method: "GET",
            url: hostUrl + queryArg,
        headers: authLoggedHeaders()
    }
};

function userLogin() {
    let loginReq = {
        method: "POST",
        url: hostLoginUrl,
        headers: authHeaders,
        data: userBody
    };

    $.ajax(loginReq)
        .then(getAuthToken)
        .catch(displayError)
}

function getAuthToken(userInfo) {
    loggedAuthToken = userInfo._kmd.authtoken;

    $('#result').append($('<li>').text(queryArg));

    $.ajax(knockReq())
        .then(displayMessage)
        .catch(displayError)
}

function displayMessage(kinveyAnswer) {
    $('#result').append($('<li>').text(kinveyAnswer.answer));

    if (!kinveyAnswer.message) {
        return
    }

    $('#result').append($('<li>').text(kinveyAnswer.message));

    queryArg = kinveyAnswer.message;

    $.ajax(knockReq())
        .then(displayMessage)
        .catch(displayError)
}

function displayError(err) {
    console.log(`${err.status}: ${err.statusText}`)
}