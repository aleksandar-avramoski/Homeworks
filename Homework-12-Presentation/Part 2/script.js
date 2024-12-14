function sumOfNumbers(numbers = []) {
    
    if (numbers.length !== 5) {
        console.log("You should provide exactly 5 numbers inside the array.");
        return;
    }

    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    console.log(sum);  

}

sumOfNumbers([2,4,23,4,12]);