export const fizzBuzz = (num: number): string => {
    if(num % 15 === 0) {
        return 'fizzbuzz';
    }
    
    if(num % 3 === 0) {
        return 'fizz';
    }

    if (num === 5) {
        return 'buzz';
    }

    return '';
}
