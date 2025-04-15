//User input
let userInput = prompt("Enter how much money you have:");

if (userInput !== null) {
    //String to number
    let number = parseInt(userInput);

    if (!isNaN(number)) {    
        if (number >= 300) {
            alert("Enjoy a fancy dinner.");
        
        } else if (number >= 150) {
            alert("Go and buy a toast.");
        
        } else if (number >= 100) {
            alert("Go and watch a movie.");
        
        } else if (number >= 50) {
            alert("Grab a coffee or snack.");
        
        } else {
            alert("Save your money or buy something small.");
        }

    } else {
        alert("Enter a valid number");
    }

} else {
    console.log("Cancel");
}
