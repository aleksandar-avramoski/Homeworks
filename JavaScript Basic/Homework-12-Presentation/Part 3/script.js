function createString(array) {
    let result = "";

    for (let i = 0; i < array.length; i++) {
        result += array[i];

        if (i < array.length - 1) {
            result += " "
        }
    }

    return result;
}

let arrayOfString = ["Hello", "there", "students", "of", "SEDC", "!"];
console.log(createString(arrayOfString))