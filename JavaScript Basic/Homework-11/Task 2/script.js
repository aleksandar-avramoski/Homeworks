function increaseNumber(number) {

  if (typeof number !== "number") {
    console.log("Invalid Input. Enter a valid number");
    return null;
  }

  //Increment
  let result = number + 1;

  console.log(`Input: ${number}, Incremented: ${result}`);
  
  return result;
}

increaseNumber(2);
increaseNumber(-2);
increaseNumber(5);
increaseNumber(9);
increaseNumber(15);

