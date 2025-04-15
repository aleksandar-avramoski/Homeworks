function multiplyByLength(array) {
    let arrayOfNumbers = [];
    for (let i = 0; i < array.length; i++) {
        arrayOfNumbers.push(array[i] * array.length);
    }

    return arrayOfNumbers;

}

console.log(multiplyByLength([7, 5, 2, 4, 6, 8]));
console.log(multiplyByLength([3, 4, 5]));
console.log(multiplyByLength([2, 7, 3, 8]));