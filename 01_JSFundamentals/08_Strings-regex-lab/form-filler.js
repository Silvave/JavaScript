
function main(input) {
    let username = input.shift();
    let email = input.shift();
    let phone = input.shift();

    input.forEach(function (elem) {
        let usernameRegex = new RegExp("\<\\![a-zA-Z]+\\!\>", "g");
        let emailRegex = new RegExp("\<\\@[a-zA-Z]+\\@\>", "g");
        let phoneRegex = new RegExp("\<\\+[a-zA-Z]+\\+\>", "g");
        elem = elem.replace(usernameRegex, username);
        elem = elem.replace(emailRegex, email);
        elem = elem.replace(phoneRegex, phone);
        console.log(elem);
    });
}

main([`Pesho`,
        `pesho@softuni.bg`,
        `90-60-90`,
        `Hello, <!username!>!`,
    `Welcome to your Personal profile.`,
    `Here you can modify your profile freely.`,
    `Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)`,
    `Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)`,
    `Your current phone number is: <+number+>. Would you like to change that? (Y/N)`])