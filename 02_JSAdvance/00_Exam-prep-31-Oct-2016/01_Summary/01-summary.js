function solution(selector) {
    $(selector).click(doThis);

    function doThis() {
        let text = $('#content strong').text();
        let summary = $(`<div id="summary">
            <h2>Summary</h2>
            <p>${text}</p>
            </div>`
        );
        $('#content').parent().append(summary);
        $(selector).attr('disabled', 'disabled');
    }
}
