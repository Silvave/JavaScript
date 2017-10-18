
function capitalizeWords([str]) {
    let strToArr = str.split(` `);
    strToArr = strToArr.map(word => word[0].toUpperCase() + word.substr(1).toLowerCase());

    return strToArr.join(` `)
}

//([str]) => str.split(` `).map(word => word.slice(1).toUpperCase().concat(word.substr(1).toLowerCase())).join(` `);

console.log(capitalizeWords([`Capitalize thEsE words`]));