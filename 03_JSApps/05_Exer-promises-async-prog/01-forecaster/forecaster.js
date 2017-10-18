
const urlWetherLocation = "https://judgetests.firebaseio.com/";

function attachEvents() {
    $('#submit').click(getForecast)
}

$(() => attachEvents())

function getForecast() {
    $.get(urlWetherLocation + "locations.json")
        .then(checkForecastLocations)
        .catch(displayErr)
}

function checkForecastLocations(arrLocations) {
    let locationInput = $('#location').val();

    for (let location of arrLocations) {
        if (location.name === locationInput) {
            return getLocationForecast(location.code)
        }
    }
    return displayErr()
}

function getLocationForecast(code) {
    let reqTodayForecast = $.get(urlWetherLocation + `forecast/today/${code}.json`);

    let reqUpcomingForecast = $.get(urlWetherLocation + `forecast/upcoming/${code}.json`);
    
    Promise.all([reqTodayForecast, reqUpcomingForecast])
        .then(displayForecast)
        .catch(displayErr)
}

function displayForecast([forecastToday, upcomingForecast]) {
    $('.error').hide()
    $('#forecast').show()

    let weatherSymbols = {
        Sunny: "&#x2600",
        "Partly sunny": "&#x26C5",
        Overcast: "&#x2601",
        Rain: "&#x2614",
        Degrees: "&#176"
    };

    $('#forecast').css('display','block');

    currentDayForecast(forecastToday, weatherSymbols);

    upcommingDaysForecast(upcomingForecast, weatherSymbols);
}

function currentDayForecast(forecastToday, weatherSymbols) {
    let arrSpan = [];

    let symbol = weatherSymbols[forecastToday.forecast.condition];

    arrSpan.push($('<span class="condition symbol"></span>').html(symbol));

    let high = forecastToday.forecast.high;
    let low = forecastToday.forecast.low;

    let conditionSpan = $('<span class="condition">').append(
        $('<span class="forecast-data">').append(forecastToday.name),
        $('<span class="forecast-data">')
            .html(`${low}${weatherSymbols.Degrees}/${high}${weatherSymbols.Degrees}`),
        $('<span class="forecast-data">').append(forecastToday.forecast.condition)
    );

    arrSpan.push(conditionSpan);

    $('#current').find($('.label')).nextAll().remove();
    $('#current').append(arrSpan);
}

function upcommingDaysForecast(nextDaysForecast, weatherSymbols) {
    $('#upcoming').find($('.label')).nextAll().remove();

    for (let nextDayData of nextDaysForecast.forecast) {
        let symbol = weatherSymbols[nextDayData.condition];
        let conditionSpan = $('<span class="upcoming">').append(
            $('<span class="symbol">').html(symbol),
            $('<span class="forecast-data">')
                .html(`${nextDayData.low}${weatherSymbols.Degrees}/${nextDayData.high}${weatherSymbols.Degrees}`),
            $('<span class="forecast-data">').append(nextDayData.condition)
        );
        conditionSpan.appendTo($('#upcoming'))
    }
}

function displayErr(err) {
    $('#forecast').hide()
    $('.error').show()

    $('.error').css('display','block').text("Error");
}
