//Name of the recipe
let nameOfTheRecipe = prompt("Enter the name of the recipe:");

while (!nameOfTheRecipe) {
  nameOfTheRecipe = prompt("Please enter the name of the recipe. It cannot be empty.");
}

//Name of the recipe
let printNameOfTheRecipe = document.getElementById("recipe");
printNameOfTheRecipe.innerText = nameOfTheRecipe;

//Number of ingredients
let numberOfIngredients = prompt("Enter the number of the ingredients that you will need:"); 

while (isNaN(numberOfIngredients) || numberOfIngredients <= 0) {
   numberOfIngredients = prompt("Please enter a valid number greater than 0 for the number of ingredients.");
}

numberOfIngredients = parseInt(numberOfIngredients);

//Ingredient List
let ingredientsList = document.getElementById("ingredients");

for (let i = 0; i < numberOfIngredients; i++) {
  //Name of ingredient
  let nameOfIngredient = prompt(`Enter the name of ingredient ${i + 1}`);

  while (!nameOfIngredient) {
    nameOfIngredient = prompt(`Please enter the name of ingredient ${i + 1}. It cannot be empty.`);
  }

  //List item for each ingredient
  let listItem = document.createElement("li");
  listItem.innerText = nameOfIngredient;

  ingredientsList.appendChild(listItem);
}


