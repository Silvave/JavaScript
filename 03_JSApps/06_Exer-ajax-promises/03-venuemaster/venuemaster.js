
const appKey = "kid_BJ_Ke8hZg";

const username = "guest";
const password = "pass";
const base64auth = btoa(username +":"+ password);
const authHeaders = { "Authorization": "Basic " + base64auth, "Content-Type": "application/json" };

const venuesIdsUrl = `https://baas.kinvey.com/rpc/${appKey}/custom/calendar?query=`;

const venueInfoUrl = `https://baas.kinvey.com/appdata/${appKey}/venues/`;

const confirmPurchUrl = `https://baas.kinvey.com/rpc/${appKey}/custom/purchase?venue=`;

$(() => $('#getVenues').click(getVenuesIds));

function getVenuesIds() {
    let venueDate = $('#venueDate').val();

    let venuesReq = {
        method: "POST",
        url: venuesIdsUrl + venueDate,
        headers: authHeaders
    };

    $.ajax(venuesReq)
        .then(getVenuesInfo)
        .catch(displayError)
}

function getVenuesInfo(venuesIdsArr) {
    $('#venue-info').empty();

    for (let venueId of venuesIdsArr) {
        let venueInfoReq = {
            method: "GET",
            url: venueInfoUrl + venueId,
            headers: authHeaders
        };

        $.ajax(venueInfoReq)
            .then(displayVenue)
            .catch(displayError)
    }
}

function displayVenue(venue) {

    let venueTemplate =
        `<div class="venue" id="${venue._id}">
          <span class="venue-name"><input class="info" type="button" value="More info">${venue.name}</span>
          <div class="venue-details" style="display: none;">
            <table>
              <tr><th>Ticket Price</th><th>Quantity</th><th></th></tr>
              <tr>
                <td class="venue-price">${venue.price} lv</td>
                <td><select class="quantity">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select></td>
                <td><input class="purchase" type="button" value="Purchase"></td>
              </tr>
            </table>
            <span class="head">Venue description:</span>
            <p class="description">${venue.description}</p>
            <p class="description">Starting time: ${venue.startingHour}</p>
          </div>
        </div>`;

    $('#venue-info').append(venueTemplate);

    let divId = $("div[id='" + venue._id + "']");

    // Toggle More Info button
    divId.find(".info").click(toggleVenueInfo.bind(divId.find(".venue-details"), divId.find(".info")));

    // Buy tickets button
    divId.find(".purchase").click(() => buyTickets(divId,venue));
}

function toggleVenueInfo(button) {
    if (this.css('display') === 'none') {
        this.css('display', 'block');
        button.prop('value', `Less Info`);
    }
    else {
        this.css('display', 'none');
        button.prop('value', `More info`);
    }
}

function buyTickets(divId, venue) {
    let quantity = divId.find(".quantity").val();
    let totalPriceTickets = Number(quantity) * Number(venue.price);

    let confirmTemplate =
        `<span class="head">Confirm purchase</span>
         <div class="purchase-info">
            <span>${venue.name}</span>
            <span>${quantity} x ${venue.price.toFixed(2)}</span>
            <span>Total: ${totalPriceTickets.toFixed(2)} lv</span>
            <input type="button" value="Confirm">
        </div>`;

    let venueInfo = $('#venue-info')
    venueInfo.empty();
    venueInfo.append(confirmTemplate);

    // Button to confirm purchase
    $('.purchase-info').find("input").click(() => confirmPurchase(venue._id, quantity))
}

function confirmPurchase(id, qty) {

    let confirmReq = {
        method: "POST",
        url: confirmPurchUrl + `${id}&qty=${qty}`,
        headers: authHeaders
    };

    $.ajax(confirmReq)
        .then(displayPurchase)
        .catch(displayError)
}

function displayPurchase(htmlPurch) {
    let venueInfo = $('#venue-info')
    venueInfo.empty();

    let divTicket = $.parseHTML(htmlPurch.html);

    venueInfo.text("You may print this page as your ticket").append(divTicket);
}

function displayError(err) {
    console.log(`${err.status}: ${err.statusText}`)
}