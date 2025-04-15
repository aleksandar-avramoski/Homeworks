let arrayOfNumbers = [4,12,43,5,32,54,22,5,10,3];

let allNumbers = document.createElement('div');
let sumOfAllNumbers = document.createElement('p');
let mathEquasion = document.createElement('p'); 

//Printing all numbers from the array in a list element
let content = "<ul>";

for (let numbers of arrayOfNumbers) {
    content += `<li> ${numbers} </li>`;
}

content += "</ul>";

allNumbers.innerHTML = content;

//Printing out the sum of all of the numbers and mathematical equasion
let sum = 0;
let equation = "";

for (let i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
    equation += arrayOfNumbers[i]

    if (i < arrayOfNumbers.length - 1) {
        equation += " + ";
    } 
}

sumOfAllNumbers.innerHTML = `Sum of all numbers: ${sum}`;
mathEquasion.innerHTML = `${equation} = ${sum}` ;

document.body.appendChild(allNumbers);
document.body.appendChild(sumOfAllNumbers);
document.body.appendChild(mathEquasion);
