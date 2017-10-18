$(function attachEvents() {
    $('#btnAdd').click(function() {
        let newItemElem = $('#newItem')
        let newItem = newItemElem.val();
        if (!newItem) return;
        $('#towns').append($('<option>').text(newItem));
        newItemElem.val('');
    });
    $('#btnDelete').click(function() {
        $('#towns option:selected').remove();
    });
});