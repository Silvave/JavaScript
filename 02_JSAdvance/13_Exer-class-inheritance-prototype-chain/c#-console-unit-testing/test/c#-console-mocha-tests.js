let expect = require('chai').expect;
let { solution } = require('../c#-console')

let { Console } = solution()

describe('Console functionality', function() {
    describe('basic functionality', function() {
        it('Console is a function', function() {
            let isFunction = typeOf(Console)

            expect(isFunction).to.be.true
        })
        it('has writeLine method', function() {
            let hasWriteLineMethod = Console.hasOwnProperty('writeLine')

            expect(hasWriteLineMethodhttps://github.com/Silvave/JavaScript.git).to.be.true
        })
        it('writeLine is a method', function() {
            let isWriteLineFunction = typeof (Console.writeLine) === 'function'

            expect(isWriteLineFunction).to.be.true
        })
    })
    describe('Invalid inputs', function() {

    })

})