
let expect = require("chai").expect;
let isSymmetric = require("../check-for-symmetry").checkSymmetry;

describe("check(arr) if it is symmetric", function() {
    it("should expect true for [1,1,2,2,1,1]", function() {
        expect(isSymmetric([1, 1, 2, 2, 1, 1])).to.be.equal(true)
    })

    it("should expect true for [1,2,3,3,2,1]", function() {
        expect(isSymmetric([1,2,3,3,2,1])).to.be.equal(true)
    })

    it("should expect true for [[-1,2,-1]", function() {
        expect(isSymmetric([-1, 2, -1])).to.be.equal(true)
    })

    it("should expect true for [1, 1, 2, 1, 1]", function() {
        expect(isSymmetric([1, 1, 2, 1, 1])).to.be.equal(true)
    })

    it("should expect false for [1,2,3,4,2,1]", function() {
        expect(isSymmetric([1,2,3,4,2,1])).to.be.equal(false)
    })

    it("should expect true for [1]", function() {
        expect(isSymmetric([1])).to.be.equal(true)
    })

    it("should expect true for []", function() {
        expect(isSymmetric([])).to.be.equal(true)
    })

    it("should expect false for [-1, 2, 1]", function() {
        expect(isSymmetric([-1, 2, 1])).to.be.equal(false)
    })

    it("should expect false for [2, 1]", function() {
        expect(isSymmetric([2, 1])).to.be.equal(false)
    })

    it("should expect true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function() {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.equal(true)
    })

    it("should expect false for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function() {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{X:5},'hi',5])).to.be.equal(false)
    })

    it("should expect false for 1,2,2,1 ", function() {
        expect(isSymmetric(1,2,2,1)).to.be.equal(false)
    })
});