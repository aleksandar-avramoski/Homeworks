function convertMinutesIntoSeconds(minutes) {

    if (typeof minutes !== "number" || minutes <= 0) {
        console.log("Invalid input. Enter a positive number.");
        return null;
    }

    //Minutes into seconds
    let seconds = minutes * 60;

    console.log(`${minutes} minutes is equal to ${seconds} seconds.`);
    
    return seconds;
}

convertMinutesIntoSeconds(2);
convertMinutesIntoSeconds(5);
convertMinutesIntoSeconds(10);
convertMinutesIntoSeconds(3);
convertMinutesIntoSeconds(8);
