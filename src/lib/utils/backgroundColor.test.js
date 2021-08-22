const backgroundColor = require("./backgroundColor")
// @ponicode
describe("backgroundColor.default", () => {
    test("0", () => {
        let callFunction = () => {
            backgroundColor.default({ key3: -100 }, { addUtilities: 0.5, variants: "BSV", e: -100 }, false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            backgroundColor.default({ key3: -100 }, { addUtilities: -1.0, variants: "JPY", e: 1 }, false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            backgroundColor.default({ key3: 1 }, { addUtilities: -0.5, variants: "EUR", e: -5.48 }, false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            backgroundColor.default({ key3: -5.48 }, { addUtilities: -0.5, variants: "BSV", e: 0 }, true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            backgroundColor.default({ key3: 1 }, { addUtilities: 0.0, variants: "ETH", e: 100 }, false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            backgroundColor.default(undefined, { addUtilities: NaN, variants: "", e: NaN }, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
