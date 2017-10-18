
function listBuilder(selector) {

    function createNewList() {
        let ul = $('<ul>');
        let selectorElement = $(selector);
        selectorElement.empty();
        selectorElement.append(ul);
    }

    function addItem(text) {
        let li = $('<li>').text(text);

        li.append($('<button>').text('Up').click(moveUp));
        li.append($('<button>').text('Down').click(moveDown));

        li.appendTo($(selector + " ul"));
    }

    function moveUp() {
        let currentLi = $(this).parent();
        return currentLi.insertBefore(currentLi.prev());
    }

    function moveDown() {
        let currentLi = $(this).parent();
        return currentLi.insertAfter(currentLi.next());
    }

    return {
        createNewList,
        addItem
    }
}