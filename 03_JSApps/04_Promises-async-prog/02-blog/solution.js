
const kinveyAppId = "kid_rJ6ubck_";
const serverUrl = "https://baas.kinvey.com/appdata/" + kinveyAppId;
const kinveyUsername = "guest";
const kinveyPassword = "guest";
const base64auth = btoa(kinveyUsername +":"+ kinveyPassword);
const authHeaders = { "Authorization": "Basic " + base64auth };

function loadPostIds() {
    let loadPostsRequest = {
        method: "GET",
        url: serverUrl + "/posts",
        headers: authHeaders
    };

    $.ajax(loadPostsRequest)
        .then(displayPosts)
        .catch(displayErr)
}

function displayPosts(allPostsArr) {
    $('#posts').empty();
    for (let post of allPostsArr) {
        let option = $('<option>').text(post.title).val(post._id);
        $('#posts').append(option)
    }
}

function displayErr(err) {
    let errorDiv = $('<div>').text("Error: " + err.status + ` (${err.statusText})`);
    $(document.body).prepend(errorDiv);
    setTimeout(function() {
        $(errorDiv).fadeOut(function() {
            $(errorDiv).remove();
        });
    }, 3000)
}

function loadSinglePost() {
    let selectedPostId = $('#posts').val();
    if (!selectedPostId) {
        return;
    }
    let requestPost = $.ajax({
        method: "GET",
        url: serverUrl + `/posts/${selectedPostId}`,
        headers: authHeaders
    });

    let requestPostComments = $.ajax({
        method: "GET",
        url: serverUrl + `/comments?query={"post_id":"${selectedPostId}"}`,
        headers: authHeaders
    });

    Promise.all([requestPost, requestPostComments])
        .then(displayPostWithComments)
        .catch(displayErr)
}

function displayPostWithComments([post, comments]) {
    $('#post-title').empty();
    $('#post-body').empty();
    $('#post-comments').empty();

    let liTitle = $('<li>').text(post.title);
    let liBody = $('<li>').text(post.body);

    $('#post-title').append(liTitle);
    $('#post-body').append(liBody);

    if (!comments.length) {
        let li = $('<li>').text("No comments")
        $('#post-comments').append(li);
        return;
    }

    for (let comment of comments) {
        let li = $('<li>').text(comment.text);
        $('#post-comments').append(li);
    }
}