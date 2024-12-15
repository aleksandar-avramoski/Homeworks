function reverse(arrayOfNumbers) {
    let reversedArray = [];

    for (let i = arrayOfNumbers.length - 1; i >= 0; i--) {
        reversedArray.push(arrayOfNumbers[i]);    
    }

    return reversedArray;
}

console.log(reverse([3,21,53,236,34,5,24,53,23]))