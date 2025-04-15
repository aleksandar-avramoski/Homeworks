function isTruthy(value) {
    if (value) {
        return 1; 
    } else {
        return 0;
    }
}

console.log(isTruthy(0)); 
console.log(isTruthy(false)); 
console.log(isTruthy("")); 
console.log(isTruthy("true")); 
console.log(isTruthy(null)); 
console.log(isTruthy(undefined));
console.log(isTruthy(NaN)); 
