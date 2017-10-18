function startApp() {
    // Clear user auth data
    sessionStorage.clear();

    toggleMenuLinks();
    $('#infoBox, #errorBox, #loadingBox').hide();

    showView('viewAppHome');

    // Bind the navigation menu links
    $("#linkMenuAppHome").click(showAppView);
    $("#linkMenuUserHome").click(showHomeView);
    $("#linkMenuLogin").click(showLoginView);
    $("#linkMenuRegister").click(showRegisterView);
    $("#linkMenuMyMessages").click(myMessages);
    $("#linkMenuSendMessage").click(showCreateMessage);
    $("#linkMenuArchiveSent").click(showArchive);
    $("#linkMenuLogout").click(logoutUser);

    //Bind main view navigation boxes
    $('#linkUserHomeMyMessages').click(myMessages);
    $('#linkUserHomeSendMessage').click(showCreateMessage);
    $('#linkUserHomeArchiveSent').click(showArchive);

    // Bind the form submit buttons
    $("#formLogin").submit(loginUser);
    $("#formRegister").submit(registerUser);
    $("#formSendMessage").submit(sendMessage);

    // Bind the info / error boxes: hide on click
    $("#infoBox, #errorBox").click(function() {
        $(this).fadeOut();
    });

    // Attach AJAX "loading" event listener
    $(document).on({
        ajaxStart: function() { $("#loadingBox").show() },
        ajaxStop: function() { $("#loadingBox").hide() }
    });

    const hostUrl = "https://baas.kinvey.com/";

    const appKey = "kid_SkWIMpK7l";
    const appSecret = "8577e5d4119c4be1944a02b3d2f12ed3";
    const base64auth = btoa(appKey +":"+ appSecret);


    const authBasicHeaders = {
        "Authorization": "Basic " + base64auth,
        "Content-Type": "application/json"
    };

    function sessionAuthHeaders() {
        let authToken = sessionStorage.getItem('authToken');
        return {
            "Authorization": "Kinvey " + authToken,
            "Content-Type": "application/json"
        }
    }

    // Global Ajax requester method
    function ajaxRequester(method, url, headers, body) {
        return $.ajax({
            method: method,
            url: url,
            headers: headers,
            data: body
        })
    }

    // Global Ajax error method
    $( document ).ajaxError(function( event, jqxhr, settings, thrownError ) {
        let errMsg = JSON.stringify(jqxhr);

        if (jqxhr.readyState === 0)
            errMsg = "Cannot connect due to network error.";

        if (jqxhr.responseJSON &&
            jqxhr.responseJSON.description)
            errMsg = jqxhr.responseJSON.description;
        showError(errMsg);
    });

    function showError(errMsg) {
        $('#errorBox').text("Error: " + errMsg);
        $('#errorBox').show();
    }

    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(function() {
            $('#infoBox').fadeOut();
        }, 3000);
    }

    // Bind the info / error boxes: hide on click
    $("#infoBox, #errorBox").click(function() {
        $(this).fadeOut();
    });

    // Bind the info / error boxes: hide on click
    $("#infoBox, #errorBox").click(function() {
        $(this).fadeOut();
    });

    // Attach AJAX "loading" event listener
    $(document).on({
        ajaxStart: function() { $("#loadingBox").show() },
        ajaxStop: function() { $("#loadingBox").hide() }
    });

    function showView(viewId) {
        $('main > section').hide();
        $('#' + viewId).show()
    }

    function toggleMenuLinks() {
        if (sessionStorage.getItem('authToken')) {
            $('.anonymous').hide();
            $('.useronly').show();
        } else {
            $('.anonymous').show();
            $('.useronly').hide();
        }
    }

    function showAppView() {
        showView('viewAppHome');
    }

    function showHomeView() {
        let username = sessionStorage.getItem('username');
        let text = `Welcome, ${username}!`;

        let paragraph = $('#spanMenuLoggedInUser');
        let h1 = $('#viewUserHomeHeading');

        h1.text(text);
        paragraph.text(text);

        showView('viewUserHome');
    }

    function showLoginView() {
        showView('viewLogin');
        $('#formLogin').trigger('reset');
    }

    function showRegisterView() {
        showView('viewRegister');
        $('#formRegister').trigger('reset');
    }

    function showArchive() {
        showView('viewArchiveSent');
        loadArchiveMessages();
    }

    function myMessages() {
        showView('viewMyMessages');

        let currentUser = sessionStorage.getItem('username');
        let queryUrl = hostUrl + `appdata/${appKey}/messages?query={"recipient_username":"${currentUser}"}`;

        ajaxRequester("GET",
            queryUrl,
            sessionAuthHeaders())
            .then(listMessages);

        function listMessages(messagesArr) {
            // Clear messages
            $('#myMessages table tbody').children().remove();

            if (messagesArr.length === 0)
                return;

            for (let message of messagesArr) {
                let date = formatDate(message._kmd.lmt);
                let sender = formatSender(message.sender_name, message.sender_username);
                let tdSender = $('<td>').text(sender);
                let tdMessage = $('<td>').text(message.text);
                let tdDate = $('<td>').text(date);

                let tr = $('<tr>').append(tdSender, tdMessage, tdDate);

                $('#myMessages table').append(tr)
            }
        }
    }

    function formatDate(dateISO8601) {
        let date = new Date(dateISO8601);
        if (Number.isNaN(date.getDate()))
            return '';
        return date.getDate() + '.' + padZeros(date.getMonth() + 1) +
            "." + date.getFullYear() + ' ' + date.getHours() + ':' +
            padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());

        function padZeros(num) {
            return ('0' + num).slice(-2);
        }
    }

    function formatSender(name, username) {
        if (!name)
            return username;
        else
            return username + ' (' + name + ')';
    }


    function showCreateMessage() {
        showView('viewSendMessage');
        loadUsersToForm();
        $('#formSendMessage').trigger('reset');
    }

    function loginUser(ev) {
        ev.preventDefault();
        let username = $('#loginUsername').val();
        let password = $('#loginPasswd').val();

        let userData = JSON.stringify({ username, password });

        ajaxRequester("POST", hostUrl + `user/${appKey}/login`,
            authBasicHeaders, userData)
            .then(loginSuccess);

        function loginSuccess(userInfo) {
            setSessionUserInfo(userInfo);
            toggleMenuLinks();
            showHomeView();
            showInfo('Login successful.');
        }
    }

    function logoutUser() {
        ajaxRequester("POST",
            hostUrl + `user/${appKey}/_logout`,
            sessionAuthHeaders())
            .then(logoutSuccess);

        function logoutSuccess() {
            sessionStorage.clear();
            toggleMenuLinks();
            showAppView();
            showInfo('Logout successful.');
        }
    }

    function registerUser(ev) {
        ev.preventDefault();

        let username = $('#registerUsername').val();
        let password = $('#registerPasswd').val();
        let name = $('#registerName').val();

        let userData = JSON.stringify({ username, password, name });

        ajaxRequester("POST", hostUrl + `user/${appKey}/`,
            authBasicHeaders, userData)
            .then(registrationSuccess);

        function registrationSuccess(userInfo) {
            setSessionUserInfo(userInfo);
            toggleMenuLinks();
            showHomeView();
            showInfo('User registration successful.');
        }
    }

    function setSessionUserInfo(userInfo) {
        sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
        sessionStorage.setItem('userId', userInfo._id);
        sessionStorage.setItem('username', userInfo.username);
        sessionStorage.setItem('name', userInfo.name);
    }

    function loadUsersToForm() {
        $('#msgRecipientUsername').children().remove();

        ajaxRequester("GET", hostUrl + `user/${appKey}`,sessionAuthHeaders())
            .then(displayUsers);

        function displayUsers(usersArr) {
            for (let user of usersArr) {
                if (user._id === sessionStorage.getItem('userId'))
                    continue;

                let sender = formatSender(user.name, user.username);
                let option = $('<option>').text(sender);
                $('#msgRecipientUsername').append(option);
            }
        }
    }

    function sendMessage(ev) {
        ev.preventDefault();

        let recipient_username = $('#msgRecipientUsername').val().split(" ")[0];

        let sender_name = sessionStorage.getItem('name');
        let sender_username = sessionStorage.getItem('username');
        if (sender_name === "")
            sender_name = null;

        let text = $('#msgText').val();

        let messageData = JSON.stringify({
            sender_username,
            sender_name,
            recipient_username,
            text
        });

        ajaxRequester("POST",
            hostUrl + `appdata/${appKey}/messages`,
            sessionAuthHeaders(),
            messageData)
            .then(adCreated);

        function adCreated() {
            showArchive();
            showInfo('Message sent.');
        }
    }

    function loadArchiveMessages() {
        let currentUser = sessionStorage.getItem('username');
        let queryUrl = hostUrl + `appdata/${appKey}/messages?query={"sender_username":"${currentUser}"}`;

        ajaxRequester("GET",
            queryUrl,
            sessionAuthHeaders())
            .then(listMessages);

        function listMessages(messagesArr) {
            // Clear messages
            $('#sentMessages table tbody').children().remove();

            if (messagesArr.length == 0)
                return;

            for (let message of messagesArr) {
                let tdBtns = $('<td>');

                let delBtn = $('<button>Delete</button>').click(() => deleteMessage(message._id));
                tdBtns.append(delBtn);

                let date = formatDate(message._kmd.lmt);
                let tdRecipient = $('<td>').text(message.recipient_username);
                let tdMessage = $('<td>').text(message.text);
                let tdDate = $('<td>').text(date);

                let tr = $('<tr>').append(tdRecipient, tdMessage, tdDate, tdBtns);

                $('#sentMessages table').append(tr)
            }

            function deleteMessage(messageId) {
                ajaxRequester("DELETE",
                    hostUrl + `appdata/${appKey}/messages/${messageId}`,
                    sessionAuthHeaders())
                    .then(messageDeleted);
            }

            function messageDeleted(response) {
                showArchive();
                showInfo('Message deleted.');
            }
        }
    }
}