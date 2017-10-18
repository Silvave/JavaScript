
function extractTheLink(arr) {
    arr.forEach(str => str.match(/(www\.)([A-Za-z0-9\-]+)(\.[a-z]+)+/g) != null ? console.log(str.match(/(www\.)([A-Za-z0-9\-]+)(\.[a-z]+)+/g).join(` `)) : false )
}

extractTheLink([`Need information about cheap hotels in London?`,
   `You can check us at www.london-hotels.co.uk!`,
    `We provide the best services in London.`,
    `Here are some reviews in some blogs:`,
`"London Hotels are awesome!" - www.indigo.bloggers.com`,
`"I am very satisfied with their services" - ww.ivan.bg`,
`"Best Hotel Services!" - www.rebel21.sedecrem.moc`
]);