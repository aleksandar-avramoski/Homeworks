function countAnimalLegs(chickens, cows, pigs) {
  
    if (typeof chickens !== "number" || typeof cows !== "number" || typeof pigs !== "number") {
        console.log("Invalid Input. Enter a valid number.");
        return null;
    }

    if (chickens < 0 || cows < 0 || pigs < 0) {
        console.log("Invalid Input. Animal counts cannot be negative.");
        return null;
    }

    // Calculate total legs
    let allAnimalLegs = (chickens * 2) + (cows * 4) + (pigs * 4);
  
    console.log(`Total number of legs of chickens, cows and pigs is: ${allAnimalLegs}`);

    return allAnimalLegs;
}

countAnimalLegs(1, 2, 8);
countAnimalLegs(3, 5, 2);
countAnimalLegs(6, 12, 2);
countAnimalLegs(4, 2, 12);
countAnimalLegs(0, 1, 9);
