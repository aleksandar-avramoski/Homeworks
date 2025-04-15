function match(word1, word2) {
    //Comparison
    return word1.toLowerCase() === word2.toLowerCase();
}

console.log(match("word", "WorD"));
console.log(match("laptop", "laptops"));
console.log(match("car", "CaR"));
console.log(match("bottle", "BoTtle"));
console.log(match("chair", "ChaIrs"));