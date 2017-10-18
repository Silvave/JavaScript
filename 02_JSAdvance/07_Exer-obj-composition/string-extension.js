
(function() {

    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)){
            return str + this;
        }
        return this.toString()
    };

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)){
            return this + str;
        }
        return this.toString()
    };

    String.prototype.isEmpty = function () {
        return this.length == 0
    };

    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString()
        }

        if (n < 4)
            return `.`.repeat(n);

        if (!this.includes(` `)) {
            return this.slice(0, n - 3) + `...`
        }

        let wordArr = this.split(` `);
        let resultStr = wordArr.shift();

        if (resultStr.length > n) {
            return resultStr.slice(0, n - 3) + `...`
        }

        for (let word of wordArr) {
            if ( resultStr.length + word.length + 4 > n) {
                return resultStr + `...`
            }
            resultStr += ` ` + word
        }
    };
    
    String.format = function (string, ...params) {
        for (let i = 1; i <= params.length; i++){
            let placeholder = `{${i - 1}}`
            string = string.replace(placeholder, params[i - 1])
        }
        return string
    };
})();

let str = `I'm going to the shop!`
let str2 = `I'mgoingt o`

console.log(str.ensureStart(`Iasd`))
console.log(str.ensureEnd(`I`))
console.log(str.ensureEnd(`shop!`))
console.log(str.isEmpty())
console.log(String.format('The {0} {1} fox', 'quick', 'brown'))
console.log(str2.truncate(7))
console.log(str2)

