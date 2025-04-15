function countdown(number) {
    let array = [];

    for (let i = number; i >= 0; i--) {
        array.push(i);
    }

    return array;
}

console.log(countdown(5));
console.log(countdown(9));
console.log(countdown(4));
console.log(countdown(10));