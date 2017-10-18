
let expect = require('chai').expect;
let mathEnforcer = require('../03-mathEnforcer').mathEnforcer;


describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('integer - should return 7', function () {
            expect(mathEnforcer.addFive(2)).to.equal(7)
        });
        it('float - should return 5.11', function () {
            expect(mathEnforcer.addFive(0.11)).to.equal(5.11)
        });
        it('negative integer - should return -2', function () {
            expect(mathEnforcer.addFive(-7)).to.equal(-2)
        });
        it('negative float - should return -2.6100000000000003', function () {
            expect(mathEnforcer.addFive(-7.61)).to.equal(-2.6100000000000003)
        });
        it('wrong type - object - should return undefined', function () {
            expect(mathEnforcer.addFive({name: "Kiro"})).to.equal(undefined)
        });
        it('wrong type - array - should return undefined', function () {
            expect(mathEnforcer.addFive([2, "doge"])).to.equal(undefined)
        });
        it('wrong type - string - should return undefined', function () {
            expect(mathEnforcer.addFive("Pesho")).to.equal(undefined)
        });
    });
    describe('subtractTen', function () {
        it('integer - should return 7', function () {
            expect(mathEnforcer.subtractTen(17)).to.equal(7)
        });
        it('float - should return 5.119999999999999', function () {
            expect(mathEnforcer.subtractTen(15.12)).to.equal(5.119999999999999)
        });
        it('negative integer - should return -22', function () {
            expect(mathEnforcer.subtractTen(-12)).to.equal(-22)
        });
        it('negative float - should return -12.61', function () {
            expect(mathEnforcer.subtractTen(-2.61)).to.equal(-12.61)
        });
        it('wrong type - object - should return undefined', function () {
            expect(mathEnforcer.subtractTen({name: "Kiro"})).to.equal(undefined)
        });
        it('wrong type - array - should return undefined', function () {
            expect(mathEnforcer.subtractTen([2, "doge"])).to.equal(undefined)
        });
        it('wrong type - string - should return undefined', function () {
            expect(mathEnforcer.subtractTen("Pesho")).to.equal(undefined)
        });
    });
    describe('sum', function () {
        it('integers - should return 7', function () {
            expect(mathEnforcer.sum(2, 5)).to.equal(7)
        });
        it('floats - should return 6.23', function () {
            expect(mathEnforcer.sum(1.11, 5.12)).to.equal(6.23)
        });
        it('negative integers - should return -22', function () {
            expect(mathEnforcer.sum(-12, -10)).to.equal(-22)
        });
        it('negative float - should return -12.62', function () {
            expect(mathEnforcer.sum(-2.61, -10.01)).to.equal(-12.62)
        });
        it('wrong type - object to first parameter - should return undefined', function () {
            expect(mathEnforcer.sum({name: "Kiro"}, 12)).to.equal(undefined)
        });
        it('wrong type - object to second parameter- should return undefined', function () {
            expect(mathEnforcer.sum(13, {name: "Kiro"})).to.equal(undefined)
        });
        it('wrong type - array to first parameter - should return undefined', function () {
            expect(mathEnforcer.sum([2, "doge"], 12)).to.equal(undefined)
        });
        it('wrong type - array to second parameter - should return undefined', function () {
            expect(mathEnforcer.sum(11,[2, "doge"])).to.equal(undefined)
        });
        it('wrong type - string to first parameter - should return undefined', function () {
            expect(mathEnforcer.sum("Pesho", 123)).to.equal(undefined)
        });
        it('wrong type - string to first parameter - should return undefined', function () {
            expect(mathEnforcer.sum(123, "Pesho")).to.equal(undefined)
        });
    });
});