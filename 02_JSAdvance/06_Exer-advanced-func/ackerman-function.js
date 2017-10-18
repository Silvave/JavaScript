// Recursive algorithm that cannot be done with "for" loops
function ack(m, n) {
    let ans

    if (m === 0) ans = n + 1;
    else if (n === 0) ans = ack(m - 1, 1);
    else ans = ack(m - 1, ack(m, n - 1));

    return ans
}

// Test
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        console.log(`Ackerman(${i},${j}) is: ${ack(i,j)}`)
    }
}