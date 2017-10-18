
const kinveyAppId = "kid_ByWSzfUfg";
const serverUrl = "https://baas.kinvey.com/appdata/" + kinveyAppId + "/biggestCatches";
const kinveyUsername = "guest";
const kinveyPassword = "guest";
const base64auth = btoa(kinveyUsername +":"+ kinveyPassword);
const authHeaders = { "Authorization": "Basic " + base64auth };
const authHeadersBody = { "Authorization": "Basic " + base64auth, "Content-type": "application/json" };

function getAllCatches() {
    let loadCatches = {
        url: serverUrl,
        headers: authHeaders
    };

    $.ajax(loadCatches)
        .then(displayCatches)
        .catch(displayError)
}

function displayCatches(catchesArr) {
    let allCatches = $('#catches')
    allCatches.empty();

    for (let fishCatch of catchesArr) {
        let divCatch = $('<div class="catch">').attr("data-id", fishCatch._id).append(
                $('<label>Angler</label>'),
                $('<input type="text" class="angler"/>').attr("value", fishCatch.angler),
                $('<label>Weight</label>'),
                $('<input type="number" class="weight"/>').attr("value", fishCatch.weight),
                $('<label>Species</label>'),
                $('<input type="text" class="species"/>').attr("value", fishCatch.species),
                $('<label>Location</label>'),
                $('<input type="text" class="location"/>').attr("value", fishCatch.location),
                $('<label>Bait</label>'),
                $('<input type="text" class="bait"/>').attr("value", fishCatch.bait),
                $('<label>Capture Time</label>'),
                $('<input type="number" class="captureTime"/>').attr("value", fishCatch.captureTime),
                $('<button class="update">Update</button>').click(() => updateCatch(fishCatch._id)),
                $('<button class="delete">Delete</button>').click(() => deleteCatch(fishCatch._id))
        );
        allCatches.append(divCatch)
    }
}

function updateCatch(id) {
    // let fishFormData = $("div[data-id='" + id + "']").contents().filter( "input" );
    let fishFormData = $("div[data-id='" + id + "']> input");
    let [angler, weight, species, location, bait, time] = fishFormData;

    let catchData = {
        angler: $(angler).val(),
        weight: Number($(weight).val()),
        species: $(species).val(),
        location: $(location).val(),
        bait: $(bait).val(),
        captureTime: Number($(time).val())
    };

    let updateReq = {
        method: "PUT",
        url: serverUrl + "/" + id,
        headers: authHeadersBody,
        data: JSON.stringify(catchData)
    };

    $.ajax(updateReq)
        .then(getAllCatches)
        .catch(displayError)
}

function deleteCatch(id) {
    let requestDel = {
        method: "DELETE",
        url: serverUrl + `/${id}`,
        headers: authHeaders
    };

    $.ajax(requestDel)
        .then(getAllCatches)
        .catch(displayError)
}

function addNewCatch() {
    let inputsArr = $("#addForm> input")

    let [angler, weight, species, location, bait, time] = inputsArr;

    let catchData = {
        angler: $(angler).val(),
        weight: Number($(weight).val()),
        species: $(species).val(),
        location: $(location).val(),
        bait: $(bait).val(),
        captureTime: Number($(time).val())
    };

    inputsArr.val(``);

    let createReq = {
        method: "POST",
        url: serverUrl,
        headers: authHeadersBody,
        data: JSON.stringify(catchData)
    };

    $.ajax(createReq)
        .then(getAllCatches)
        .catch(displayError)
}

function displayError(err) {
    alert(`${err.status}: ${err.statusText}`)
}