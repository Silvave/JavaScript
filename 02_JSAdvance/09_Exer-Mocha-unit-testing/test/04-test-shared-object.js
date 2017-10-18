let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

let sharedObject = require('../04-shared-object').sharedObject;


describe('sharedObject', function () {
    let testingObject;
    beforeEach('init the object', function () {
        testingObject = Object.create(sharedObject);
        document.body.innerHTML = (
            `<div id="wrapper">
            <input type="text" id="name">
            <input type="text" id="income">
            </div>`
        );
    });

    describe('testing default properties values', function () {
        it('testing name prop', function () {
            expect(testingObject.name).to.equal(null);
        });
        it('testing income prop', function () {
            expect(testingObject.income).to.equal(null);
        });
    });
    describe('changeName', function () {
        it('empty string (name - default) should return', function () {
            testingObject.changeName("");
            expect(testingObject.name).to.equal(null, "Name changed incorrectly!")
        });
        it('empty string (name - changed) should return', function () {
            testingObject.name = "Pesho";
            testingObject.changeName("");
            expect(testingObject.name).to.equal("Pesho", "Name changed incorrectly!")
        });
        it('empty string (name texboxt - changed) should return', function () {
            let currentName = $('#name');
            currentName.val("Gosho");
            testingObject.changeName("");
            expect(currentName.val()).to.equal("Gosho", "Name changed incorrectly!")
        });
        it('string (Peshio) should equal textbox (Peshio)', function () {
            let currentName = $('#name');
            testingObject.changeName("Peshio");
            expect(currentName.val()).to.equal(testingObject.name)
        });
    });
    describe('changeIncome', function () {
        it('invalid income (0) should return', function () {
            let currentIncome = $('#income');
            testingObject.changeIncome(0);
            expect(testingObject.income).to.equal(null, "Income changed incorrectly!");
            expect(currentIncome.val()).to.equal("")
        });
        it('invalid income (-1) should return', function () {
            let currentIncome = $('#income');
            testingObject.changeIncome(-1);
            expect(testingObject.income).to.equal(null, "Income changed incorrectly!");
            expect(currentIncome.val()).to.equal("")
        });
        it('invalid income (-2) should return', function () {
            let currentIncome = $('#income');
            testingObject.income = 10;
            currentIncome.val(10);
            testingObject.changeIncome(-2);
            expect(testingObject.income).to.equal(10, "Income changed incorrectly!");
            expect(currentIncome.val()).to.equal("10", "Income changed incorrectly!")
        });
        it('invalid income - float should return', function () {
            let currentIncome = $('#income');
            currentIncome.val(10);
            testingObject.income = 10;
            testingObject.changeIncome(2.223);
            expect(testingObject.income).to.equal(10, "Income changed incorrectly!");
            expect(currentIncome.val()).to.equal("10", "Income changed incorrectly!")
        });
        it('invalid income array should return', function () {
            let currentIncome = $('#income');
            currentIncome.val(10);
            testingObject.income = 10;
            testingObject.changeIncome([123, 3123]);
            expect(currentIncome.val()).to.equal("10", "Income changed incorrectly!");
            expect(testingObject.income).to.equal(10, "Income changed incorrectly!")
        });
        it('invalid income object should return', function () {
            let currentIncome = $('#income');
            testingObject.income = 10;
            currentIncome.val(10);
            testingObject.changeIncome({income: 10});
            expect(testingObject.income).to.equal(10, "Income changed incorrectly!");
            expect(currentIncome.val()).to.equal("10", "Income changed incorrectly!")
        });
        it('valid income change should return', function () {
            let currentIncome = $('#income');
            testingObject.changeIncome(12);
            expect(testingObject.income).to.equal(12, "Income changed correctly!");
            expect(currentIncome.val()).to.equal("12");
        });
    });
    describe('updateName', function () {
        it('invalid update name parameter should not pass', function () {
            let currentName = $('#name');
            currentName.val("");
            testingObject.name = "Pesho";
            testingObject.updateName();
            expect(testingObject.name).to.equal("Pesho", "Invalid parameter!")
        });
        it('valid update name parameter should pass', function () {
            let currentName = $('#name');
            currentName.val("Gosho");
            testingObject.name = "Pesho";
            testingObject.updateName();
            expect(testingObject.name).to.equal("Gosho", "Invalid parameter!")
        });
    });
    describe('updateIncome', function () {
        it('invalid update income parameter (empty) string should not pass', function () {
            let currentIncome = $('#income');
            currentIncome.val("");
            testingObject.income = 12;
            testingObject.updateIncome();
            expect(testingObject.income).to.equal(12, "Invalid parameter!")
        });
        it('invalid update income parameter - object - should not pass', function () {
            let currentIncome = $('#income');
            currentIncome.val({income: 412});
            testingObject.income = 12;
            testingObject.updateIncome();
            expect(testingObject.income).to.equal(12, "Invalid parameter!")
        });
        it('invalid update income parameter - float - object should not pass', function () {
            let currentIncome = $('#income');
            currentIncome.val(2.4123);
            testingObject.income = 2;
            testingObject.updateIncome();
            expect(testingObject.income).to.equal(2, "Invalid parameter!")
        });
        it('invalid update income parameter zero number should not pass', function () {
            let currentIncome = $('#income');
            currentIncome.val(0);
            testingObject.income = 12;
            testingObject.updateIncome();
            expect(testingObject.income).to.equal(12, "Invalid parameter!")
        });
        it('invalid update income parameter negative number should not pass', function () {
            let currentIncome = $('#income');
            currentIncome.val(-1);
            testingObject.income = 12;
            testingObject.updateIncome();
            expect(testingObject.income).to.equal(12, "Invalid parameter!")
        });
        it('valid update income parameter should pass', function () {
            let currentIncome = $('#income');
            currentIncome.val("1234");
            testingObject.income = 54;
            testingObject.updateIncome();
            expect(testingObject.income).to.equal(1234, "Invalid parameter!")
        });
        it('valid update income parameter should pass', function () {
            let currentIncome = $('#income');
            currentIncome.val("1");
            testingObject.income = 54;
            testingObject.updateIncome();
            expect(testingObject.income).to.equal(1, "Invalid parameter!")
        });
    });
});
