function negate(arr) {
    let arrayOfNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        arrayOfNumbers.push(-arr[i]);
    }

    return arrayOfNumbers;
}

console.log(negate([3, 5, 25, -4, -6, 23, 5, 7]));