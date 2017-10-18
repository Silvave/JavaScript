
function isDriverSpeeding(arr) {
    let speed = Number(arr.shift());
    let area = arr.pop();

    if (speed <= 0) return;

    let checkSpeed = function(speed, area) {
        let areaLimit;
        switch (area){
            case "residential": areaLimit = 20; break;
            case "city": areaLimit = 50; break;
            case "interstate": areaLimit = 90; break;
            case "motorway": areaLimit = 130; break;
            default: return
        }

        if (speed - areaLimit <= 0) return ``;
        else if (speed - areaLimit <= 20) return `speeding`;
        else if (speed - areaLimit <= 40) return `excessive speeding`;
        else return `reckless driving`
    };

    console.log(checkSpeed(speed, area))
}

isDriverSpeeding([`40`, `city`]);
isDriverSpeeding([`21`, `residential`]);
isDriverSpeeding([`120`, `interstate`]);
isDriverSpeeding([`200`, `motorway`]);