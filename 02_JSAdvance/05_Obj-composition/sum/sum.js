
$(function() {
    let model = (() => {
        let num1, num2, result;

        function init(selOne, selTwo, resultSel) {
            num1 = $(selOne);
            num2 = $(selTwo);
            result = $(resultSel);
        }

        function add() {
            action((a,b) => a + b)
        }

        function subtract() {
            action((a,b) => a - b)
        }

        function action(func) {
            let val1 = Number(num1.val());
            let val2 = Number(num2.val());
            result.val(func(val1, val2));
        }

        return { init, add, subtract }
    })();

    model.init(`#num1`, `#num2`, `#result`);
    $(`#sumButton`).click(model.add);
    $(`#subtractButton`).click(model.subtract);
})();