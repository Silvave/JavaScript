
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;

let testedFunction = function (name) {
    let textboxName = $('#name');
    textboxName.val(name)
};

describe('DOM testing with testedFunction',function () {
    let textboxName = $('#name');
    it('test that DOM element exists', function () {
        testedFunction('Pesho');
        expect(textboxName.val()).to.equal('Pesho');
    });
    it('test that DOM element exists-1', function () {
        testedFunction('Gosho');
        expect(textboxName.val()).to.equal('Gosho');
    });
    it('test that DOM element exists-2', function () {
        testedFunction('Misho');
        expect(textboxName.val()).to.equal('Misho');
    });
    it('test that DOM element exists-3', function () {
        testedFunction('Misho');
        expect(textboxName.val()).to.equal('Misho');
    });
});
