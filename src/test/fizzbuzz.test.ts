import { fizzBuzz } from "../main/fizzbuzz";

describe('fizzbuzz tests', () => {
    it("3 should return fizz", () => {
        expect(fizzBuzz(3)).toBe("fizz");
    })

    it("5 should return buzz", () => {
        expect(fizzBuzz(5)).toBe("buzz");
    })

    it("15 should return fizzbuzz", () => {
        expect(fizzBuzz(15)).toBe("fizzbuzz");
    })

    it('6 should return fizz', () => {
        expect(fizzBuzz(6)).toBe("fizz");
    });

    it('10 should return buzz', () => {
        expect(fizzBuzz(10)).toBe("buzz");
    });    
})
