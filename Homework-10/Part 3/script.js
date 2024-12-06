//Money that person owns
let moneyThatPersonOwns = 10000;

function atm() {
    //Amount of money that the person wants
    let amountOfMoneyThatPersonWants = prompt("Enter the amount of money that you want to get:")

    //Transaction canceled
    if (amountOfMoneyThatPersonWants === null || amountOfMoneyThatPersonWants === "") {
       alert("Transaction canceled.");
       return "Transaction canceled";
    }

    //Parsing String to Int
    let moneyThatPersonWants = parseInt(amountOfMoneyThatPersonWants);

    //Not valid positive number
    if (isNaN(moneyThatPersonWants) || moneyThatPersonWants <= 0) {
        alert("Please enter a valid positive number.");
        return "Invalid input";
    } 

    //Not enough money
    if (moneyThatPersonWants > moneyThatPersonOwns) {
        alert("Not enough money.");
        return "Not enough money";

    } else {
        //Withdrawing money
        moneyThatPersonOwns = moneyThatPersonOwns - moneyThatPersonWants;
        alert(`Withdrawn money: ${moneyThatPersonWants}\nMoney left in account: ${moneyThatPersonOwns}`);
        console.log(`Withdrawn money: ${moneyThatPersonWants}`);
        console.log(`Money left in account: ${moneyThatPersonOwns}`);
        return {
            withdrawn: moneyThatPersonWants,
            remaining: moneyThatPersonOwns,
        };
    }
}

atm();