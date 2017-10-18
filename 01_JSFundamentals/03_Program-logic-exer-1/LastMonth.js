getPreviousMonth(['17','3','2012']);
function getPreviousMonth([_day, month, year]) {
    return new Date(year, month-1, 0).getDate();
}