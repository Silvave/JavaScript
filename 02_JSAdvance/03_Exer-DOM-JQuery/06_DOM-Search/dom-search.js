function domSearch(selector, value) {
    // Div Add Controls
    let divAddControls = $('<div class="add-controls"></div>')

    let labelToAddCont = $('<label for="userText"></label>').append(
        'Enter text',
        $('<input type="text" id="userText">'),
        $('<a type="button" class="button">Add</a>').click(addItemToList)
    )

    function addItemToList() {
        let inputElem = $('#userText')
        let text = inputElem.val()
        inputElem.val('')

        if (!text) {
            return
        }

        let delLink = $('<a type="button" class="button">X</a>')
            .click(function() {
                $(this).parent().remove()
                return false
            })

        let liElem = $(`<li class="list-item"></li>`)
            .append(delLink, $(`<strong>${text}</strong>`))

        let searchText = $('.search-controls input')[0].value

        addDisplayStyleToLi(liElem, text, searchText)

        $('.items-list').append(liElem)
    }

    // Div Search Controls
    let divSearchControls = $('<div class="search-controls"></div>')

    let inputSearchElem = $('<input type="text" id="searchText">')
        .on('input', searchListItems)

    function searchListItems() {
        let searchText = $(this).val()
        let listLiItems = $('.list-item')

        listLiItems.each((i, elem) => {
            let liText = elem.textContent.substring(1)

            addDisplayStyleToLi(elem, liText, searchText)
        })
    }

    function addDisplayStyleToLi(liElem, liText, searchText) {
        // value is second param to main function - name left for Judge
        if (!value) {
            liText = liText.toLowerCase()
            searchText = searchText.toLowerCase()
        }

        if (liText.includes(searchText)) {
            $(liElem).show()
        } else {
            $(liElem).hide()
        }
    }

    let labelSearchCont = $('<label for="searchText"></label>')
        .append('Search: ', inputSearchElem)

    // Div Result Controls
    let divResultControls = $(
        `<div class="result-controls">
            <ul class="items-list"></ul>
        </div>`)

    divAddControls.append(labelToAddCont)
    divSearchControls.append(labelSearchCont)

    $(selector).append(divAddControls, divSearchControls, divResultControls)
}