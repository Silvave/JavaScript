
const url = "https://messenger-17439.firebaseio.com/messenger";

function sendMessage() {
    let author = $('#author').val();
    let message = $('#content').val();
    let time = Date.now();

    $('#author').val("");
    $('#content').val("");

    let body = {
        author: author,
        content: message,
        timestamp: time
    };

    $.post(url + ".json", JSON.stringify(body))
        .then(loadMessages)
        .catch((err) => alert(err))
}

function loadMessages() {
    $.get(url + ".json")
        .then(displayMessages)
        .catch((err) => alert(err))
}

function displayMessages(messages) {
    let sortedMessages = Object.keys(messages)
        .sort((a,b) => messages[a].timestamp - messages[b].timestamp);

    $('#messages').empty();
    let arrMessages = [];
    for (let key of sortedMessages) {
        let author = messages[key].author;
        let content = messages[key].content;
        let text = `${author}: ${content}`;

        arrMessages.push(text)
    }

    $('#messages').append(arrMessages.join(`\n`))
}