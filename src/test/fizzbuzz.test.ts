import { fizzBuzz } from "../main/fizzbuzz";

describe('fizzbuzz tests', () => {
    it("3 should return fizz", () => {
        expect(fizzBuzz(3)).toBe("fizz");
    })

    it("5 should return buzz", () => {
        expect(fizzBuzz(5)).toBe("buzz");
    })
})
