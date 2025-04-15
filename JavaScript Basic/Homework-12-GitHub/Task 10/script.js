function transform(arrayOfNumbers) {

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] % 2 === 0) {
            arrayOfNumbers[i] -= 1;
        } else {
            arrayOfNumbers[i] += 1;
        }
    }

    return arrayOfNumbers;
}

console.log(transform([2,5,1,3,12,11,20]));
console.log(transform([3, 34, 5,]));
console.log(transform([2, 7, 8, 39, 4]));