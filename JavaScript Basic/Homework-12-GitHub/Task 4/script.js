function check(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            return true;
        }
    }

    return false;
}

console.log(check([23, 31, 5, 2, 33, 8, 4], 5));
console.log(check([23, 31, 5, 2, 33, 8, 4], 5));
console.log(check([23, 31, 5, 2, 33, 8, 4], 43));
console.log(check([23, 31, 5, 2, 33, 8, 4], 8));