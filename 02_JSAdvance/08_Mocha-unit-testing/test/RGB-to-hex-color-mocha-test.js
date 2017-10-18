
let expect = require("chai").expect;
let toColor = require("../RGB-to-hex-color").rgbToHexColor;

describe("Transform numbers to hex color", function() {
    it("should expect #FF9EAA from (255, 158, 170)", function() {
        expect(toColor(255, 158, 170)).to.be.equal("#FF9EAA")
    })

    it("should expect #0C0D0E from (12, 13, 14)", function() {
        expect(toColor(12, 13, 14)).to.be.equal("#0C0D0E")
    })

    it("should expect #000000 from (0, 0, 0)", function() {
        expect(toColor(0, 0, 0)).to.be.equal("#000000")
    })

    it("should expect #FFFFFF from (255, 255, 255)", function() {
        expect(toColor(255, 255, 255)).to.be.equal("#FFFFFF")
    })

    it("should expect undefined from (-1, 0, 0)", function() {
        expect(toColor(-1, 0, 0)).to.be.equal(undefined)
    })

    it("should expect undefined from (1, -2, 0)", function() {
        expect(toColor(1, -2, 0)).to.be.equal(undefined)
    })

    it("should expect undefined from (1, 2, -3)", function() {
        expect(toColor(1, 2, -3)).to.be.equal(undefined)
    })

    it("should expect undefined from (256, 0, 0)", function() {
        expect(toColor(256, 0, 0)).to.be.equal(undefined)
    })

    it("should expect undefined from (0, 256, 0)", function() {
        expect(toColor(0, 256, 0)).to.be.equal(undefined)
    })

    it("should expect undefined from (1, 2, 256)", function() {
        expect(toColor(1, 2, 256)).to.be.equal(undefined)
    })

    it("should expect undefined from (3.1, 0, 0)", function() {
        expect(toColor(3.1, 0, 0)).to.be.equal(undefined)
    })

    it("should expect undefined from (0, 3.1, 0)", function() {
        expect(toColor(0, 3.1, 0)).to.be.equal(undefined)
    })

    it("should expect undefined from (0, 0, 3.1)", function() {
        expect(toColor(0, 0, 3.1)).to.be.equal(undefined)
    })

    it("should expect undefined from ()", function() {
        expect(toColor()).to.be.equal(undefined)
    })

    it("should expect undefined from (\"5\", [3], {8:9})", function() {
        expect(toColor("5", [3], {8:9})).to.be.equal(undefined)
    })
});