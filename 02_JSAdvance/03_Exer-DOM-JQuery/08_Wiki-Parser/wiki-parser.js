function wikiParser(selector) {
    const headingRgx = /([=]{1,3})([^=]*)\1/g
    const boldItalicRgs = /(?![^'])([']{2,3})([^'\n]+)\1(?=[^']|$)/g
    const linkRgx = /\[\[([^|\[\]]+)(\|[^\[\]]+)?]]/g

    let headingFunc = (i, t) => `<h${i}>${t}</h${i}>`
    let boldFunc = t => `<b>${t}</b>`
    let italicFunc = t => `<i>${t}</i>`
    let linkFunc = (p, t) => `<a href="/wiki/${p}">${t}</a>`

    let htmlStr = $(selector)[0].innerHTML

    htmlStr = htmlStr.replace(headingRgx, (m, g1, g2) => {
        let headingNumber = g1.length
        let headingText = g2

        return headingFunc(headingNumber, headingText)
    })

    htmlStr = htmlStr.replace(boldItalicRgs, (m, g1, g2) => {
        let quotCount = g1.length
        let elemText = g2

        let elem
        if (quotCount === 2) {
            elem = italicFunc(elemText)
        } else if (quotCount === 3) {
            elem = boldFunc(elemText)
        }

        return elem
    })

    htmlStr = htmlStr.replace(linkRgx, (m, g1, g2) => {
        let partialUrl = g1
        let linkText = g2

        let link
        if (linkText) {
            linkText = linkText.substring(1)

            link = linkFunc(partialUrl, linkText)
        } else {
            link = linkFunc(partialUrl, partialUrl)
        }

        return link
    })

    $(selector).html(htmlStr)
}