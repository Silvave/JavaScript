
let expect = require('chai').expect;
let isOddOrEven = require('../01-even-or-odd').isEvenOrOdd;


describe('isOddOrEven', function () {
   it('should equal odd', function () {
       expect(isOddOrEven('Gosho')).to.equal('odd',
           "Function did not returned correct result!");
   });
   it('should return even', function () {
       expect(isOddOrEven('Mimi')).to.equal('even',
           "Function did not returned correct result!");
   });
   it('should return undefined', function () {
       expect(isOddOrEven(123)).to.equal(undefined,
           "Function did not returned correct result!");
   });
   it('with object should return undefined', function () {
        expect(isOddOrEven({name: "Lolo"})).to.equal(undefined,
            "Function did not returned correct result!");
   });
   it('with array should return undefined', function () {
        expect(isOddOrEven(["asd", 123])).to.equal(undefined,
            "Function did not returned correct result!");
   });
   it('with multiple consecutive checks should return correct results', function () {
       expect(isOddOrEven('Baba')).to.equal('even',
           "Function did not returned correct result!");
       expect(isOddOrEven('Baba-Martaa')).to.equal('odd',
           "Function did not returned correct result!");
       expect(isOddOrEven('Goshooo')).to.equal('odd',
           "Function did not returned correct result!");
   });
});