function calendar([day, month, year]) {
    let monthFirstDay = new Date(year, month - 1, 2).getUTCDay()
    let monthLastDayNumber = new Date(year, month, 1).getUTCDate()

    let months = [ 'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December' ]

    let weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    // Draw Table
    let mainDiv = $('#content')
    let table = $('<table>')
    let tableCaption = $('<caption>')
    let tableHead = $('<thead>')
    let tableBody = $('<tbody>')

    // Head row
    let tableHeaderRow = $('<tr>');
    for (let i = 0; i < weekDays.length; i++) {
        let day = weekDays[i]
        tableHeaderRow.append($('<th>').text(day))
    }
    tableHead.append(tableHeaderRow)

    // Main part - calendar
    let weekCount = 0
    let mainCalendarDaysRow
    for (let i = 1; i <= monthLastDayNumber || weekCount % 7 !== 0; i++) {
        if (weekCount % 7 === 0) {
            mainCalendarDaysRow = $('<tr>')
            tableBody.append(mainCalendarDaysRow)
        }

        if (i === 1 && i !== monthFirstDay) {
            let lastWeekDay = monthFirstDay === 0 ? 7 : monthFirstDay

            for (let j = 1; j < lastWeekDay; j++) {
                mainCalendarDaysRow.append($('<td>'))
                weekCount++
            }
        }

        let td = $('<td>')
        if (i <= monthLastDayNumber) {
            td.text(i)

            if (i === day) {
                td.addClass('today')
            }
        }

        mainCalendarDaysRow.append(td)
        weekCount++
    }

    // Add caption
    tableCaption.text(`${months[month - 1]} ${year}`)

    table.append(tableCaption, tableHead, tableBody)
    mainDiv.append(table)
}