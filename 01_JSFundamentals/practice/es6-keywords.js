function practicingKeywordsES6() {
    let a, b, c
    let r = 10

    with (Math) {
        a = PI * r * r
        b = r * cos(PI)
        c = r * sin(PI / 2)
    }
    console.log(`a = ${a}, b = ${b}, c = ${c}`)
}

practicingKeywordsES6()