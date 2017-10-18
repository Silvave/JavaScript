
$(function attachEvents() {
    $('#btnDelete').on('click', deleteTown);

    function deleteTown() {
        let townNameElem = $('#townName')
        let searchedTown = townNameElem.val();
        townNameElem.val("");

        let isDeleted = false;
        $('#towns option').each((index, town) => {
            let townName = town.textContent;
            if (townName === searchedTown) {
                $(town).remove();
                isDeleted = true;
            }
        });

        let resultElem = $('#result')
        if (isDeleted) {
            resultElem.text(`${searchedTown} deleted.`)
        }
        else {
            resultElem.text(`${searchedTown} not found.`)
        }
    }
});