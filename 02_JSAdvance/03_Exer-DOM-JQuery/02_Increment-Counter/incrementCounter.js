
function increment(selector) {
    let mainDiv = $(selector);
    let fragment = document.createDocumentFragment();
    let textarea = $(`<textarea class="counter" disabled>0</textarea>`);
    let buttonUp = $(`<button class="btn" id="incrementBtn">Increment</button>`);
    let buttonAdd = $(`<button class="btn" id="addBtn">Add</button>`);
    let ul = $('<ul class="results">');

    buttonUp.click(increamentNumber);
    buttonAdd.click(addNumber);

    textarea.appendTo(fragment);
    buttonUp.appendTo(fragment);
    buttonAdd.appendTo(fragment);
    ul.appendTo(fragment);

    function increamentNumber() {
        let valueNumber = $('.counter').val();
        $('.counter').val(++valueNumber)
    }

    function addNumber() {
        let valueNumber = $('.counter').val();
        let li = $('<li>').text(valueNumber);
        $('.results').append(li);
    }

    mainDiv.append(fragment)
}

window.onload = () => increment("#wrapper");