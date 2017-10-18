
let createBook = (function() {
    let id = 1;

    function selectBook(currId) {
        let bookId = $(this).parent();
        // let bookId = $("#book" + currId);
        $(bookId).css("border", "2px solid blue");
    }
    function deselectBook(currId) {
        let bookId = $(this).parent();
        // let bookId = $("#book" + currId);
        $(bookId).css("border", "none")
    }

    return (selector, title, author, isbn) => {
        let divBook = $('<div>').attr("id", "book" + id++);
        let titleP = $('<p class="title"></p>').text(title);
        let authorP = $('<p class="author">').text(author);
        let isbnP = $('<p class="isbn">').text(isbn);
        let selectBtn = $('<button>Select</button>').click(selectBook);
        let deselectBtn = $('<button>Deselect</button>').click(deselectBook);

        divBook.append(titleP, authorP, isbnP, selectBtn, deselectBtn);
        $(selector).append(divBook);
    }
})();