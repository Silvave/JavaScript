function* random(n) {
    let p = 4871
    let q = 7919
    n = Number(n)

    while (true) {
        n = (n * n) % (p * q)

        let randomNum = n % 100

        yield randomNum
    }
}

// Judge test
let rnd = random(100);

for (let i = 0; i < 10; i++) {
    console.log(rnd.next().value);
}
