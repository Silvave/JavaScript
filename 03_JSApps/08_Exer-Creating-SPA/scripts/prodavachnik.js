function startApp() {
    sessionStorage.clear();

    toggleMenuLinks();

    showHomeView();

    // Top bar bind buttons
    $('#linkHome').click(showHomeView);
    $('#linkLogin').click(showLoginView);
    $('#linkRegister').click(showRegisterView);
    $('#linkListAds').click(showListAdsView);
    $('#linkCreateAd').click(showCreateAdView);
    $('#linkLogout').click(logoutUser);

    // Form buttons binds
    $('#buttonLoginUser').click(loginUser);
    $('#buttonRegisterUser').click(registerUser);
    $('#buttonCreateAd').click(createAd);

    const hostUrl = "https://baas.kinvey.com/";
    const appKey = "kid_ByWSzfUfg";
    const appSecret = "97568ab3dafa40198ea789023439a066";
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
        $('#linkHome').show();
        if (sessionStorage.getItem('authToken')) {
            $('#linkLogin, #linkRegister').hide();
            $('#linkListAds, #linkCreateAd, #linkLogout').show();
        }
        else {
            $('#linkLogin, #linkRegister').show();
            $('#linkListAds, #linkCreateAd, #linkLogout').hide();
        }
    }

    function showHomeView() {
        let username = sessionStorage.getItem('username');
        let paragraph = $('#viewHome .title');

        if (username)
            paragraph.text(`Hello, ${username}!`);
        else
            paragraph.text(`Welcome!`);

        showView('viewHome');
    }

    function showLoginView() {
        showView('viewLogin');
        $('#formLogin').trigger('reset');
    }

    function showRegisterView() {
        showView('viewRegister');
        $('#formRegister').trigger('reset');
    }

    function showListAdsView() {
        showView('viewAds');

        ajaxRequester("GET",
            hostUrl + `appdata/${appKey}/promotions`,
            sessionAuthHeaders())
            .then(listAds);

        function listAds(adsArr) {
            if (adsArr.length == 0) {
                $('#ads').children().remove();
                $('#ads').text("No advertisements available.")
                            .css("text-align", "center");
                return
            }

            // Clear adverts
            $('#ads table tbody').children().nextAll().remove();

            for (let ad of adsArr) {
                let tdBtns = $('<td>');

                if (sessionStorage.getItem('userId') === ad._acl.creator) {
                    let delBtn = $('<a href="#">[Delete]</a>').click(() => deleteAd(ad._id));
                    let editBtn = $('<a href="#">[Edit]</a>').click(() => showAdForEdit(ad));
                    tdBtns.append(delBtn, " ", editBtn);
                }

                let tr = $('<tr>')
                    .append(`<td>${ad.Title}</td>
                             <td>${ad.Publisher}</td>
                             <td>${ad.Description}</td>
                             <td>${ad.Price}</td>
                             <td>${ad["Date of Publishing"]}</td>`)
                    .append(tdBtns);

                $('#ads table').append(tr)
            }
        }
    }

    function showCreateAdView() {
        showView('viewCreateAd');
        $('#formCreateAd').trigger('reset');
    }

    function loginUser() {
        let username = $('#formLogin input[name=username]').val();
        let password = $('#formLogin input[name=passwd]').val();

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
            showHomeView();
            showInfo('Logout successful.');
        }
    }

    function registerUser() {
        let username = $('#formRegister input[name=username]').val();
        let password = $('#formRegister input[name=passwd]').val();

        let userData = JSON.stringify({ username, password });

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
    }

    function createAd() {
        let Title = $('#formCreateAd input[name=title]').val();
        let Description = $('#formCreateAd textarea').val();
        let Publisher = sessionStorage.getItem('username');

        let date = formatDate($('#formCreateAd input[name=datePublished]').val());

        let Price = Number($('#formCreateAd input[name=price]').val()).toFixed(2);

        let adData = JSON.stringify({
            Title,
            Description,
            Publisher,
            "Date of Publishing": date,
            Price
        });

        ajaxRequester("POST",
            hostUrl + `appdata/${appKey}/promotions`,
            sessionAuthHeaders(),
            adData)
            .then(adCreated);

        function adCreated() {
            showListAdsView();
            showInfo('The advert was created.');
        }
    }

    function deleteAd(adId) {
        ajaxRequester("DELETE",
            hostUrl + `appdata/${appKey}/promotions/${adId}`,
            sessionAuthHeaders())
            .then(adDeleted);

        function adDeleted(response) {
            showListAdsView();
            showInfo('The advert was deleted.');
        }
    }

    function showAdForEdit(ad) {
        showView('viewEditAd');
        $('#formEditAd').trigger('reset');

        $('#formEditAd input[name=id]').val(ad._id);
        $('#formEditAd input[name=publisher]').val(ad.Publisher);
        $('#formEditAd input[name=title]').val(ad.Title);
        $('#formEditAd textarea').val(ad.Description);

        let [month, day, year] = (ad["Date of Publishing"]).split("/");
        $('#formEditAd input[name=datePublished]').val(`${year}-${month}-${day}`);

        $('#formEditAd input[name=price]').val(ad.Price);

        $('#buttonEditAd').click(editAd);

        function editAd() {
            let adId = $('#formEditAd input[name=id]').val();
            let Publisher = $('#formEditAd input[name=publisher]').val();
            let Title = $('#formEditAd input[name=title]').val();
            let Description = $('#formEditAd textarea').val();
            let Price = Number($('#formEditAd input[name=price]').val()).toFixed(2);
            let date = formatDate($('#formEditAd input[name=datePublished]').val());

            if (ad.Title == Title && ad.Description == Description &&
            ad["Date of Publishing"] == date && ad.Price == Price) {
                showListAdsView();
                return showInfo('There are no changes made.');
            }

            let editedAd = JSON.stringify({
                Title,
                Description,
                Publisher,
                "Date of Publishing": date,
                Price
            });

            ajaxRequester("PUT",
                hostUrl + `appdata/${appKey}/promotions/${adId}`,
                sessionAuthHeaders(),
                editedAd)
                .then(successfullyEditedAd);

            function successfullyEditedAd(response) {
                showListAdsView();
                return showInfo('Successfully edited advert.');
            }
        }
    }

    function formatDate(dataInfo) {
        let date = new Date(dataInfo);
        let year = date.getFullYear();
        let day = date.getDate() + "";
        let month = (date.getMonth() + 1) + "";
        day = day.length == 1 ? "0" + day : day;
        month = month.length == 1 ? "0" + month : month;
        date = month +'/'+ day +'/'+ year;
        return date
    }
}