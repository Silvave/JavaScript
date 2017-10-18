function wikiParser(selector) {
    let formatted = $(selector)[0].innerHTML
        .replace(/([=]{1,3})([^=]*)\1/g, (m, g1, g2) => `<h${g1.length}>${g2}</h${g1.length}>`)
        .replace(/(?![^'])([']{2,3})([^'\n]+)\1(?=[^']|$)/g, (m, g1, g2) =>
            g1.length === 2 ? `<i>${g2}</i>` : `<b>${g2}</b>`)
        .replace(/\[\[([^|\[\]]+)(\|[^\[\]]+)?]]/g, (m, g1, g2) =>
            `<a href="/wiki/${g1}">${g2 ? g2.substring(1) : g1}</a>`)

    $(selector).html(formatted)
}