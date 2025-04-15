function numberInfo(number) {
    
    //Is palindome
    let isPalindrome;
    
    let originalNumber = number.toString();
    let reversedNumber = number.toString().split('').reverse().join('');
    
    if (originalNumber === reversedNumber) {
        isPalindrome = true
    } else {
        isPalindrome = false;
    }

    //Is prime
    let isPrime = true;

    if (number <= 1) {
        isPrime = false;
    }

    for (let i = 2; i <= number / 2; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }

    //Is even or odd
    let isEvenOrOdd;

    if (number % 2 === 0) {
        isEvenOrOdd = "Even";
    } else {
        isEvenOrOdd = "Odd";
    }

    //Is positive or negative
    let isPositiveOrNegative;

    if (number <= 0) {
        isPositiveOrNegative = "Negative";
    } else {
        isPositiveOrNegative = "Positive";
    }

    return {
        numberLength: number.toString().length,
        isPalindrome: isPalindrome,
        isPrimeNumber: isPrime,
        isEvenOrOdd: isEvenOrOdd,
        isPositiveOrNegative: isPositiveOrNegative,
    }
}

console.log(numberInfo(79));