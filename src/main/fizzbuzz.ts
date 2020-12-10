export const fizzBuzz = (num: number): string => {
    if(num === 3) {
        return 'fizz';
    }

    if (num === 5) {
        return 'buzz';
    }

    return 'fizzbuzz';
}
