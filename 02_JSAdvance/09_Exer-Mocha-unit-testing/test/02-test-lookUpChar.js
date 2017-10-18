
let expect = require('chai').expect;
let lookupChar = require('../02-lookupChar').lookupChar;


describe('lookupChar', function () {
    describe('normal tests', function () {
        it('should return "r"', function () {
            expect(lookupChar('Aron', 1)).to.equal('r');
        });
        it('should return "A"', function () {
            expect(lookupChar('Aron', 0)).to.equal('A');
        });
        it('should return "n"', function () {
            expect(lookupChar('Aron', 3)).to.equal('n');
        });
    });
    describe('test index input', function () {
        it('with number smaller than 0 should return "Incorrect index"', function () {
            expect(lookupChar('Aron', -1)).to.equal("Incorrect index");
        });
        it('with number bigger that string length should return "Incorrect index"', function () {
            expect(lookupChar('Aron', 4)).to.equal("Incorrect index");
        });
        it('with number bigger that string length should return "Incorrect index"', function () {
            expect(lookupChar('Aron', 10)).to.equal('Incorrect index');
        });
    });
    describe('test type of inputs', function () {
        it('with float number - should return undefined', function () {
            expect(lookupChar('Aron', 12.124)).to.equal(undefined);
        });
        it('wrong second parameter - should return undefined', function () {
            expect(lookupChar('Aron', {name: "Jo"})).to.equal(undefined);
        });
        it('wrong first parameter - should return undefined', function () {
            expect(lookupChar([123, 134], 0)).to.equal(undefined);
        });
        it('wrong both parameters -should return undefined', function () {
            expect(lookupChar({asd: 543}, [{name: "Bo"}, 123])).to.equal(undefined);
        });
    });
    describe('speed testing/crash testing', function () {
        it('test with multiple consecutive check-ups', function () {
            expect(lookupChar('Aron', 0)).to.equal('A');
            expect(lookupChar('Aron', 1)).to.equal('r');
            expect(lookupChar('Aron', 2)).to.equal('o');
            expect(lookupChar('Aron', 3)).to.equal('n');
            expect(lookupChar('Aron', 4)).to.equal("Incorrect index");
            expect(lookupChar('Aron', -1)).to.equal("Incorrect index");
            expect(lookupChar('Aron', [123, 42])).to.equal(undefined);
            expect(lookupChar({}, [])).to.equal(undefined);
        });
    });
});