import {isLeapYear} from "../main/leapyear";

describe('leap year', () => {
    it('should return true for 1996', () => {
        expect(isLeapYear(1996)).toBe(true);
    });

    it('should return false for 2001', () => {
        expect(isLeapYear(2001)).toBe(false);
    });    
});