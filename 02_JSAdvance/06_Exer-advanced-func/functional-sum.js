function add(n) {
    let v = (x) => add(n + x);
    v.toString = () => n;

    return v
} 

console.log(add(1)(6)(-3)(4).toString());