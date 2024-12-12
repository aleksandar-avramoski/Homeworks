function isPlural(word) {
    return word.endsWith("s");
}

console.log(isPlural("words"));
console.log(isPlural("word"));
console.log(isPlural("changes"));
console.log(isPlural("change"));
console.log(isPlural("dudes"));
console.log(isPlural("dude"));