
function attachEvents() {
    const appKey = "kid_ByWSzfUfg";

    const username = "guest";
    const password = "guest";
    const base64auth = btoa(username +":"+ password);
    const authHeaders = { "Authorization": "Basic " + base64auth, "Content-Type": "application/json" };

    const hostUrl = `https://baas.kinvey.com/appdata/${appKey}/players`;

    $(() => getPlayers());
    $('#addPlayer').click(addNewPlayer);

    let currentPlayer;
    $('#save').click(() => savePlayerProgress(currentPlayer));
    $('#reload').click(() => reloadAmmo(currentPlayer));

    let playerOldStats;

    function getPlayers() {
        let getPlayerReq = {
            method: "GET",
            url: hostUrl,
            headers: authHeaders
        };

        $.ajax(getPlayerReq)
            .then(displayPlayers)
            .catch(displayError)
    }

    function displayPlayers(playerArr) {
        $('#players').empty();
        $('#addPlayer').removeAttr('disabled');

        for (let player of playerArr) {
            let playerTemplate =
                `<div class="player" data-id="${player._id}">
                    <div class="row">
                        <label>Name:</label>
                        <label class="name">${player.name}</label>
                    </div>
                    <div class="row">
                        <label>Money:</label>
                        <label class="money">${player.money}</label>
                    </div>
                    <div class="row">
                        <label>Bullets:</label>
                        <label class="bullets">${player.bullets}</label>
                    </div>
                    <button class="play">Play</button>
                    <button class="delete">Delete</button>
                </div>`;

            $('#players').append(playerTemplate);

            let divId = $(`div[data-id="${player._id}"]`);

            divId.find('.play').click(() => loadGame(player));
            divId.find(".delete").click(() => deletePlayer(player._id));
        }
    }

    function savePlayerProgress(player) {
        $('#save').hide();
        $('#reload').hide();
        $('#canvas').hide();
        clearInterval($('#canvas')[0].intervalId);

        if (playerOldStats.bullets == player.bullets &&
            playerOldStats.money == player.money) {
            $('#players .play').removeAttr('disabled');
            $('#players .delete').removeAttr('disabled');
            $('#addPlayer').removeAttr('disabled');
            return
        }

        let playerData = {
            name: player.name,
            money: player.money,
            bullets: player.bullets
        };

        let updateReq = {
            method: "PUT",
            url: hostUrl + "/" + player._id,
            headers: authHeaders,
            data: JSON.stringify(playerData)
        };

        $.ajax(updateReq)
            .then(getPlayers)
            .catch(displayError)
    }

    function loadGame(player) {
        currentPlayer = player;
        playerOldStats = Object.assign({}, player);

        $('#players .play').attr('disabled', 'disabled');
        $('#players .delete').attr('disabled', 'disabled');
        $('#addPlayer').attr('disabled', 'disabled');

        $('#canvas').show();
        $('#save').show();
        $('#reload').show();
        loadCanvas(player);
    }

    function reloadAmmo(player) {
        player.money -= 60;
        player.bullets = 6;
    }

    function deletePlayer(id) {
        let deletePlayerReq = {
            method: "DELETE",
            url: hostUrl + "/" + id,
            headers: authHeaders
        };

        $.ajax(deletePlayerReq)
            .then(getPlayers)
            .catch(displayError)
    }

    function addNewPlayer() {
        let playerName = $('#addName').val();
        $('#addName').val(``);

        let playerBody = {
            name: playerName,
            money: 500,
            bullets: 6
        };

        let newPlayerReq = {
            method: "POST",
            url: hostUrl,
            headers: authHeaders,
            data: JSON.stringify(playerBody)
        };

        $.ajax(newPlayerReq)
            .then(getPlayers)
            .catch(displayError)
    }

    function displayError(err) {
        console.log(`${err.status}: ${err.statusText}`)
    }
}