
function filterByAge([ minAge, firstName, firstAge, secondName, secondAge]) {
    firstAge = Number(firstAge);
    secondAge = Number(secondAge);
    minAge = Number(minAge);
    if (firstAge >= minAge)
        console.log({ name: firstName, age: firstAge });
    if (secondAge >= minAge)
        console.log({ name: secondName, age: secondAge })
}

filterByAge(['12','Ivan','15','Asen','90']);