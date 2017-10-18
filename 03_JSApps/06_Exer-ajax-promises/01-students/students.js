const appKey = "kid_BJXTsSi-e";
const appSecret = "447b8e7046f048039d95610c1b039390";

const username = "guest";
const password = "guest";

const hostUrl = `https://baas.kinvey.com/appdata/${appKey}/students`;

const base64auth = btoa(username +":"+ password);
const authHeaders = { "Authorization": "Basic " + base64auth, "Content-type": "application/json" };

function getStudents() {
    let studentsReq = {
        method: "GET",
        url: hostUrl,
        headers: authHeaders
    };

    $.ajax(studentsReq)
        .then(displayStudents)
        .catch(displayError)
}

function displayStudents(studentsArr) {

    for (let student of studentsArr.sort((a,b) => a.ID - b.ID)) {
        let tr = $('<tr>').append(
            $('<td>').text(student.ID),
            $('<td>').text(student.FirstName),
            $('<td>').text(student.LastName),
            $('<td>').text(student.FacultyNumber),
            $('<td>').text(student.Grade)
        );

        $('#results').append(tr)
    }
}

function displayError(err) {
    $('#results').append($('<tr>')
        .text(`${err.status}: ${err.statusText}`))
}

$(() => getStudents());