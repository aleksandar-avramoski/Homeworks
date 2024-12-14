function sumOfMaxAndMinNumbers() {
    let arrayOfNumbers = [6,12,3,15,23,4,25,12,11,15];
    let minNumber = Infinity;
    let maxNumber = -Infinity;

    for(let i = 0; i < arrayOfNumbers.length; i++) {

        if (arrayOfNumbers[i] > maxNumber) {
            maxNumber = arrayOfNumbers[i];
        } 

        if (arrayOfNumbers[i] < minNumber) {
            minNumber = arrayOfNumbers[i];
        }
    }

    console.log("Max number:" + maxNumber);
    console.log("Min number:" + minNumber);

    let sum = minNumber + maxNumber;
    console.log(sum);
}

sumOfMaxAndMinNumbers();