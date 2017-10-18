function* extractTags(strInput) {
    let tagRgx = /<[^>]+>/g
    let tagMatches = strInput.match(tagRgx)

    for (let tag of tagMatches) {
        yield tag
    }
}

// Judge tests
let html = `<html><body>
<p align='center'><span lang='en'>Hello</span>, HTML
</p> Bye, bye</body></html>`;

for (let tag of extractTags(html)) {
    console.log(tag);
}
