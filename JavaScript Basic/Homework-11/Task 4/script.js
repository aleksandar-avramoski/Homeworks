function remainder(num1, num2) {

    if (typeof num1 !== "number" || typeof num2 !== "number") {
        console.log("Invalid Input. Both inputs must be numbers.");
        return null;
    }

    if (num2 === 0) {
        console.log("Division by zero is not allowed.");
        return null;
    }

    //Remainder
    let result = num1 % num2;

    console.log(`Remainder of ${num1} divided by ${num2} is ${result}`);

    return result;
}

remainder(3, 7);
remainder(6, 7);
remainder(1, 3);
remainder(4, 6);
remainder(-2, -4);


