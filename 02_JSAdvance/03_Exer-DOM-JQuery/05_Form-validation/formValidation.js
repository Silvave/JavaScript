$(function() {
    $('#company').on('change', function () {
        $('#companyInfo').toggle();
    });
    $('#submit').click(function (ev) {
        ev.preventDefault();
        $('#valid').css('display', 'none');
        
        $('.pairContainer :input')
            .each((index, elem) => $(elem).css('border-color','transparent'));

        validate();
    });
});

function validate() {
    let usernameReg = /^[A-Za-z0-9]{3,20}$/;
    let emailReg = /^.*@.*\.+.*$/;
    let passReg = /^[A-Za-z0-9_]{5,15}$/;
    let isCompanyNumber = /^[1-9][0-9]{3}$/;

    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let checkPass = $('#confirm-password');
    let companyNum = $('#companyNumber');
    let isCompanyChecked = $('#company')[0].checked;

    let regexArr = [ usernameReg, emailReg, passReg, passReg, isCompanyNumber ];
    let strArr = [ username, email, password, checkPass, companyNum ];

    let checkForm = true;
    let compInArrNum = 4;
    for (let i = 0; i < regexArr.length; i++) {
        if (i === compInArrNum && !isCompanyChecked) {
            continue;
        }
        if (!regexArr[i].test(strArr[i].val())) {
            strArr[i].css("border-color","red");
            checkForm = false;
        } 
    }

    if (password.val() !== checkPass.val()) {
            checkPass.css("border-color","red");
            checkForm = false;
    }

    if (checkForm) {
        $('#valid').css('display', 'block')
    }
}