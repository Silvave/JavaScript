const hostUrl = "https://phonebook-nakov.firebaseio.com/phonebook";

function loadContacts() {
    $.get(hostUrl + ".json")
        .then(displayContacts)
        .catch((err) => alert(err))
}

function createContacts() {
    let person = $('#person').val();
    let phone = $('#phone').val();

    $('#person').val("");
    $('#phone').val("");

    let contactObj = {
        person: person,
        phone: phone
    };

    $.ajax({
        method: "POST",
        url: hostUrl + ".json",
        data: JSON.stringify(contactObj),
        success: loadContacts,
        error: (err) => alert(err)
    })
}

function displayContacts(contacts) {
    $('#phonebook').empty();

    for (let key in contacts) {
        let name = contacts[key].person;
        let phone = contacts[key].phone;
        let li = $('<li>').text(`${name}: ${phone}`).append(" ");

        let delButton = $('<button>').text("[Delete]").click(() => deleteContact(key));
        li.append(delButton);

        li.appendTo($('#phonebook'))
    }
}

function deleteContact(contactKey) {
    $.ajax({
        method: "DELETE",
        url: hostUrl + "/" + contactKey + ".json",
        success: loadContacts,
        error: (err) => alert(err)
    })
}