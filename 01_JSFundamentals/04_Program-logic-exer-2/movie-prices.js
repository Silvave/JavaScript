
function ticketPrice([movieTitle, day]) {
    let theGodfather = [12, 10, 15, 12.50, 15, 25, 30];
    let schindlerList = [8.50, 8.50, 8.50, 8.50, 8.50, 15, 15];
    let casablanca = [8, 8, 8, 8, 8, 10, 10];
    let wizardOFOz = [10, 10, 10, 10, 10, 15, 15];

    movieTitle = movieTitle.toLowerCase();
    day = day.toLowerCase();
    if (movieTitle === `the godfather`){
        return findTicketPrice(theGodfather,day);
    }
    else if (movieTitle === `schindler's list`){
        return findTicketPrice(schindlerList,day);
    }
    else if (movieTitle === `casablanca`){
        return findTicketPrice(casablanca,day);
    }
    else if (movieTitle === `the wizard of oz`){
        return findTicketPrice(wizardOFOz,day);
    }
    else {
        return `error`;
    }
    function findTicketPrice([mon, tues, wed, thur, fri, sat, sun], day) {
        switch (day){
            case `monday`: return mon; break;
            case `tuesday`: return tues; break;
            case `wednesday`: return wed; break;
            case `thursday`: return thur; break;
            case `friday`: return fri; break;
            case `saturday`: return sat; break;
            case `sunday`: return sun; break;
            default: return `error`;
        }
    }
}


console.log(ticketPrice([`The Godfather`, `Friday`]));
console.log(ticketPrice([`casablanca`, `sunday`]));
console.log(ticketPrice([`Schindler's LIST`, `monday`]));
console.log(ticketPrice([`casablanca`, `NineDay`]));