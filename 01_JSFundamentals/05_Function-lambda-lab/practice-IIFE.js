
(function (count) {
    for (let i = 1; i <= count; i++)
        console.log('+'.repeat(i));
})(6);

var f = (function() {
    let x = 1;
    return function(){ console.log(x++); }
})();

console.log(typeof f);
f();
f();
f();
f();
f();f();f();


