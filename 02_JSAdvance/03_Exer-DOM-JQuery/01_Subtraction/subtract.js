
$(function subtract() {
    $('#subtractNums').click(function () {
        let num1 = $('#firstNumber').val();
        let num2 = $('#secondNumber').val();
        let result = Number(num1) - Number(num2);
        $('#result').text(result);
    });
});