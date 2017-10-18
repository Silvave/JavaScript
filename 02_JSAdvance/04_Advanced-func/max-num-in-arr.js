
let obj = {
    name: "Max number is: ",
    f: function(arr) {
        console.log(this.name + Math.max.apply(null, arr.map(Number)));
    }
};

obj.f([1, 2, 3, 4, 5])