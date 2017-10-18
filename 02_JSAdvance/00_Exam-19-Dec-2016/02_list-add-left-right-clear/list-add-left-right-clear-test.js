let expect = require('chai').expect;
let { makeList } = require('./add-delete-list');

describe('list', function () {
    let list;
    beforeEach(function () {
        list = makeList()
    });

    describe('testing if "list" has the mentioned main functionality', function () {
        it('"list" should be an object', () => {
            expect(typeof(list)).to.equal('object');
        });
        it('should have addLeft() function', () => {
            expect(list.hasOwnProperty('addLeft')).to.equal(true);
            expect(typeof list.addLeft).to.equal('function');
        });
        it('should have addRight() function', () => {
            expect(list.hasOwnProperty('addRight')).to.equal(true);
            expect(typeof list.addRight).to.equal('function');
        });
        it('should have clear() function', () => {
            expect(list.hasOwnProperty('clear')).to.equal(true);
            expect(typeof list.clear).to.equal('function');
        });
        it('should have toString() function', () => {
            expect(list.hasOwnProperty('toString')).to.equal(true);
            expect(typeof list.toString).to.equal('function');
        });
    });
    describe('testing every function', function () {
        it('should be empty on init', () => {
            expect(list.toString()).to.equal('');
        });
        it('should add element at the beginning with addLeft(item)', () => {
            list.addLeft(5);
            list.addLeft(3);
            expect(list.toString().split(", ")[0]).to.equal('3');
            expect(list.toString().split(", ")[1]).to.equal('5');
        });
        it('should add element at the end with addRight(item)', () => {
            list.addRight(5);
            list.addRight(3);
            expect(list.toString().split(", ")[1]).to.equal('3');
            expect(list.toString().split(", ")[0]).to.equal('5');
        });
        it('should add elements of any type on add(item)', () => {
            list.addRight(5);
            list.addLeft("six");
            list.addRight(false);
            list.addRight([3123, "Pesho"]);
            expect(list.toString()).to.equal(`six, 5, false, 3123,Pesho`);
        });
        it('toSting should return a string', () => {
            list.addRight(3123);
            list.addRight("Pesho");
            list.addRight(123.152);
            expect(typeof(list.toString())).to.equal('string');
        });
        it('toSting should join elements with ", "', () => {
            let arr = [3123, "Pesho", 123.152];
            list.addRight(3123);
            list.addRight("Pesho");
            list.addRight(123.152);
            expect(list.toString()).to.equal(arr.join(", "));
        });
        it('clear should removes all elements in the "list"', () => {
            list.addRight(true);
            list.addRight(false);
            list.addRight("Pesho");
            list.addRight(123.152);
            list.clear();
            expect(list.toString()).to.equal("");
        });
    });
    describe('stress testing', function () {
        it('should work correctly on this complex test', function () {
            let items = ['asd', 1, 15, 88.8, -14, {name: 'pesho'}, false, true, NaN, -0, 0];
            for (let i = 0; i < items.length/2; i++) {
                list.addRight(items[i]);
                if (i < items.length/2 - 1)
                    list.addLeft(items[items.length-i-1]);
            }
            expect(list.toString()).to.equal('false, true, NaN, 0, 0, asd, 1, 15, 88.8, -14, [object Object]');
            list.clear();
            expect(list.toString()).to.equal("");
        });
    })
});