export const fizzBuzz = (num: number): string => {
    // if(num % 15 === 0) {
    //     return 'fizzbuzz';
    // }

    let response = '';
    
    if(num % 3 === 0) {
        response += 'fizz';
    }

    if (num % 5 === 0) {
        response += 'buzz';
    }

    return response ? response : '' + num;
}
