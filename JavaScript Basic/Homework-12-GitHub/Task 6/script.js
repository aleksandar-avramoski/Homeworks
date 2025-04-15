function diffMaxMin(arrayOfNumbers) {
    let minNumber = Infinity;
    let maxNumber = -Infinity;

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] > maxNumber) {
            maxNumber = arrayOfNumbers[i];
        }

        if (arrayOfNumbers[i] < minNumber) {
            minNumber = arrayOfNumbers[i];
        }
    }

    console.log(`Smallest number is ${minNumber}, biggest is ${maxNumber}`);
}

console.log(diffMaxMin([14, 46, 12, 44, 57, 4, 34, 8]));
