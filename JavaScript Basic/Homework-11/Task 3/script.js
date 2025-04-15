function hoursIntoSeconds(hours) {

    if (typeof hours !== "number" || hours <= 0) {
        console.log("Invalid input. Enter a valid number");
        return null;
    }

    //Hours into seconds
    let seconds = hours * 3600;

    console.log(`${hours} hours is equal to ${seconds} seconds.`)

    return seconds;
}

hoursIntoSeconds(2);
hoursIntoSeconds(10);
hoursIntoSeconds(6);
hoursIntoSeconds(8);
hoursIntoSeconds(1);