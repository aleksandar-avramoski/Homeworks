function createArray(number) {
    let arrayOfNumbers = [];

    for (let i = 1; i <= number; i++) {
        arrayOfNumbers.push(i);    
    }

    return arrayOfNumbers;
}

console.log(createArray(12));