import { fizzBuzz } from "../main/fizzbuzz";

describe('fizzbuzz tests', () => {
    it.each`
        value | expected
        ${3}  | ${'fizz'}
        ${5}  | ${'buzz'}
        ${15} | ${'fizzbuzz'}
        ${6}  | ${'fizz'}
        ${10} | ${'buzz'}
        ${1}  | ${'1'}
    `('$value should return $expected', ({value, expected}) => {
        expect(fizzBuzz(value)).toBe(expected);
    })
})
