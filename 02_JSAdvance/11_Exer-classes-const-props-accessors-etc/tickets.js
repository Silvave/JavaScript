
function ticketDB(arrTickets, sortCrit) {
    let arrTicketResult = [];

    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    for (let strTicket of arrTickets){
        let [ destination, price, status ] = strTicket.split(`|`);
        arrTicketResult.push(new Ticket(destination, price, status))
    }

    if (sortCrit == `price`)
        arrTicketResult.sort((a,b) => a[sortCrit] - b[sortCrit]);
    else
        arrTicketResult.sort((a,b) => a[sortCrit].localeCompare(b[sortCrit]));

    return arrTicketResult
}

console.log(ticketDB(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
        'price'));