function monthName(number) {

    switch(number){
        case 1:
            return "January";

        case 2:
            return "February";

        case 3:
            return "March";

        case 4:
            return "April";

        case 5:
            return "May";

        case 6:
            return "June";

         case 7:
            return "July";

        case 8:
            return "August";

        case 9:
            return "September";

        case 10:
            return "October";

        case 11:
            return "November";

        case 12:
            return "December";

        default:
            return "Month with that number does not exist";
    }
}

console.log(monthName(3));
console.log(monthName(6));
console.log(monthName(8));
console.log(monthName(1));
console.log(monthName(11));