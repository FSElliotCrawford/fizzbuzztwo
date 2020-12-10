import {isLeapYear} from "../main/leapyear";

describe('leap year', () => {
    it('should return true for 1996', () => {
        expect(isLeapYear(1996)).toBe(true);
    });

    it('should return false for 2001', () => {
        expect(isLeapYear(2001)).toBe(false);
    });

    it('should return true for 2000', () => {
        expect(isLeapYear(2000)).toBe(true);
    });

    it('should return true for 2004', () => {
        expect(isLeapYear(2004)).toBe(true);
    });

    it('should return false for 1900', () => {
        expect(isLeapYear(1900)).toBe(false);
    });

    it('should return false for 1800', () => {
        expect(isLeapYear(1800)).toBe(false);
    });

    it('should return false for 3300', () => {
        expect(isLeapYear(3300)).toBe(false);
    });
});
