//User input
let userInput = prompt("Enter your year of birth:");

if (userInput !== null) {
    //String to number
    let year = parseInt(userInput);

    if (!isNaN(year) && year <= 2024) {

        if ((year - 4) % 12 === 0) {
            alert("Chinese Zodiac: Rat");
        } else if ((year - 4) % 12 === 1) {
            alert("Chinese Zodiac: Ox");
        } else if ((year - 4) % 12 === 2) {
            alert("Chinese Zodiac: Tiger");
        } else if ((year - 4) % 12 === 3) {
            alert("Chinese Zodiac: Rabbit"); 
        } else if ((year - 4) % 12 === 4) {
            alert("Chinese Zodiac: Dragon");
        } else if ((year - 4) % 12 === 5) {
            alert("Chinese Zodiac: Snake");
        } else if ((year - 4) % 12 === 6) { 
            alert("Chinese Zodiac: Horse");
        } else if ((year - 4) % 12 === 7) { 
            alert("Chinese Zodiac: Goat");
        } else if ((year - 4) % 12 === 8) { 
            alert("Chinese Zodiac: Monkey");
        } else if ((year - 4) % 12 === 9) {
            alert("Chinese Zodiac: Rooster");
        } else if ((year - 4) % 12 === 10) {
            alert("Chinese Zodiac: Dog");
        } else if ((year - 4) % 12 === 11) {
            alert("Chinese Zodiac: Pig");
        }

    } else {
        alert("Enter your year of birth");
    }

} else {
    console.log("Cancel");
}