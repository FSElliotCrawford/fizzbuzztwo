export const isLeapYear = (num: number) => {
    if(num === 1900 || num === 1800)  {
        return false;
    }
    return num % 4 === 0;
}
