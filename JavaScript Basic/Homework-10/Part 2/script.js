//Converting dog age
function convertDogAge(age, toDogYears = true) {

    if (toDogYears) {
        let yearsOfDog = age * 7;
        console.log(`The dog's age in dog years is: ${yearsOfDog}`);
        return yearsOfDog;

    } else {
        let yearsOfHuman = age / 7;
        console.log(`The dog's age in humans years is: ${yearsOfHuman}`);
        return yearsOfHuman;

    }
}

//Dog's age
convertDogAge(3);

//Human's age
convertDogAge(21, false);
