
function helloWorld([str]) {
    str.split(``).forEach((x,i) => console.log(`str[${i}] -> ${x}`))
}

helloWorld(['Hello, World!'])