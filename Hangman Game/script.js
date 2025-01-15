//TOTAL LIVES ALLOWED
let totalLives = 6;

//LIST OF WORDS FOR EACH CATEGORY
let food = ["avocado", "burrito", "pineapple", "broccoli", "cookie", "hamburger", "steak", "rice", "curry", "cream", "soup", "sandwich", "dumplings", "pancakes", "apple", "noodles", "toast", "cheesecake", "lasagna", "chocolate"];
let cities = ["london", "paris", "tokyo", "beijing", "dubai", "mumbai", "sydney", "moscow", "toronto", "chicago", "seoul", "bangkok", "singapore", "skopje", "berlin", "rome"];
let countries = ["liechtenstein", "mozambique", "azerbaijan", "kyrgyzstan", "afghanistan", "uzbekistan", "turkmenistan", "switzerland", "bangladesh", "madagascar", "philippines", "kazakhstan", "netherlands", "luxembourg",];
let electronicsCompanies = ["samsung", "sony", "panasonic", "toshiba", "philips", "mitsubishi", "lenovo", "intel", "canon", "xiaomi"]; 
let carCompanies = ["mercedes", "volkswagen", "ford", "toyota", "hyundai", "honda", "fiat", "nissan", "renault", "subaru", "ferrari", "lamborghini", "porsche"];

//COMBINED ARRAY OF ALL WORD CATEGORIES
let allWords = [food, cities, countries, electronicsCompanies, carCompanies];

//ALPHABET LETTERS FOR USER INPUT VALIDATION
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//SELECT A RANDOM CATEGORY INDEX
let randomArray = Math.floor(Math.random() * allWords.length);

//SELECT A RANDOM WORD FROM THE CHOSEN CATEGORY
let randomWord = Math.floor(Math.random() * allWords[randomArray].length);

//STORE THE NAME OF THE SELECTED CATEGORY
let chosenCategory;

//HTML ELEMENT TO DISPLAY THE CHOSEN CATEGORY
let categoryToBeShown = document.getElementById("chosen-category");

function categoryThatIsChosen() {
  switch (randomArray) {
    case 0:
      chosenCategory = "Food";
      break;

    case 1:
      chosenCategory = "Cities";
      break;

    case 2:
      chosenCategory = "Countries";
      break;

    case 3:
      chosenCategory = "Electronics Companies";
      break;

    case 4:
      chosenCategory = "Car Companies";
      break;

    default:
      chosenCategory = "Else";
  }

  //UPDATE CATEGORY DISPLAY IN THE HTML
  categoryToBeShown.innerHTML = `The Chosen Category is <span class="highlight">${chosenCategory}</span>`;
}

categoryThatIsChosen();

//INITIALIZE WORD AS UNDERSCORES FOR DISPLAY
let selectedWord = allWords[randomArray][randomWord];

//WORD PRESENTED AS DASHES
let wordAsDashes = selectedWord.replace(/./g, "_");

//HTML ELEMENT TO DISPLAY THE CURRENT WORD PROGRESS
let displayedWord = document.getElementById('word');
displayedWord.innerText = wordAsDashes;

//DISPLAY INITIAL LIVES TO THE PLAYER
let lives = document.getElementById('total-lives');
lives.innerText = `You have ${totalLives} lives`;

//LETTER BUTTON ELEMENTS FROM THE DOM
let letter = document.getElementsByClassName('letter');

//ARRAY TO TRACK GUESSED LETTERS
let guessedLetters = []; 

//FLAG TO INDICATE GAME OVER STATUS
let gameOver = false;

//PLAY AGAIN BUTTON ELEMENT
let playAgain = document.getElementById('play-again');

//VARIABLE FOR CURRENTLY CLICKED ELEMENT
let element;

//FUNCTION TO HANDLE MOUSE CLICKS ON LETTERS
function handleClick(e) {
  let dashReplace = "";

  let element = e.target;

  //UPDATE LETTER STYLE TO INDICATE SELECTION
  if (element) {
    element.style.backgroundColor = "red";
    element.style.pointerEvents = "none";
  }

  //STOP FUNCTION IF GAME IS OVER
  if (gameOver) {
    return;
  }

  //DECREMENT LIVES IF LETTER IS NOT IN THE WORD
  if (!selectedWord.includes(element.id)) {
    totalLives = totalLives - 1;
    lives.innerText = `You have ${totalLives} lives`;
  }

  //END GAME IF NO LIVES REMAIN
  if (totalLives === 0) {
    endGame();
    return;
  }

  //ADD THE LETTER TO GUESSED LETTERS IF NOT ALREADY GUESSED
  if (!guessedLetters.includes(element.id)) {
    guessedLetters.push(element.id);
  }

  //console.log(selectedWord);

  //UPDATE DISPLAYED WORD WITH GUESSED LETTERS
  for (let i = 0; i < selectedWord.length; i++) {
    if (guessedLetters.includes(selectedWord.charAt(i).toLowerCase())) {
      dashReplace += selectedWord.charAt(i);
    } else {
      dashReplace += "_";
    }
  }

  //UPDATE WORD DISPLAY
  displayedWord.innerText = dashReplace;

  //PLAY AGAIN FUNCTION
  playAgainNow();

  //CHECK FOR WIN CONDITION
  if (!dashReplace.includes("_")) {
    win();
  }

  //REMOVING EVENT LISTENER ON CLICK
  element.removeEventListener("click", handleClick);
}

//ADD CLICK EVENT LISTENERS TO ALL LETTER ELEMENTS
Array.from(letter).forEach(function (element) {
  element.addEventListener("click", handleClick);
});


//FUNCTION TO HANDLE KEYBOARD INPUT
function handleKeyPress() {

  document.addEventListener("keydown", function (e) {
    let dashReplace = "";

    //EXIT IF GAME IS OVER
    if (gameOver) {
      return;
    }

    //STORE PRESSED KEY
    let keyPressed = e.key.toLowerCase();

    //IGNORE IF KEY WAS ALREADY GUESSED
    if (guessedLetters.includes(keyPressed)) {
      return;
    }

    //FIND CORRESPONDING ELEMENT FOR THE PRESSED KEY
    let element = document.getElementById(keyPressed);

    //UPDATE LETTER STYLE IF ELEMENT EXISTS
    if (element) {
      element.style.backgroundColor = "red";
      element.style.pointerEvents = "none";
    }

    //ADDING LETTER TO AN ARRAY
    for (let letter of alphabet) {
      if (element.id === letter) {
        if (!guessedLetters.includes(letter)) {
          guessedLetters.push(letter);
        }
      }
    }

    //DECREMENT LIVES IF LETTER IS NOT IN THE WORD
    if (!selectedWord.includes(keyPressed)) {
      totalLives = totalLives - 1;
      lives.innerText = `You have ${totalLives} lives`;
    }

    //END GAME IF NO LIVES REMAIN
    if (totalLives === 0) {
      endGame();
      return;
    }

    //UPDATE DISPLAYED WORD WITH GUESSED LETTERS
    for (let i = 0; i < selectedWord.length; i++) {
      if (guessedLetters.includes(selectedWord.charAt(i).toLowerCase())) {
        dashReplace += selectedWord.charAt(i);
      } else {
        dashReplace += "_";
      }
    }

    //UPDATE WORD DISPLAY
    displayedWord.innerText = dashReplace;

    //PLAY AGAIN FUNCTION
    playAgainNow();

    //INITIALIZE KEYBOARD INPUT HANDLING
    if (!dashReplace.includes("_")) {
      win();
    }
  });
}

//HANDLING KEY PRESS
handleKeyPress();

//FUNCTION TO HANDLE "PLAY AGAIN" BUTTON CLICK
function playAgainNow() {

  playAgain.addEventListener('click', function() {
    gameOver = false;
    totalLives = 6;
    guessedLetters = [];

    //SELECT NEW RANDOM WORD AND CATEGORY
    randomArray = Math.floor(Math.random() * allWords.length);
    randomWord = Math.floor(Math.random() * allWords[randomArray].length);

    selectedWord = allWords[randomArray][randomWord];
    wordAsDashes = selectedWord.replace(/./g, "_");

    //UPDATE CATEGORY AND RESET GAME UI
    categoryThatIsChosen();

    displayedWord.innerText = wordAsDashes;

    lives.innerText = `You have ${totalLives} lives`;
    lives.style.color = "";
    lives.style.fontSize = "";

    //RESET LETTER BUTTONS
    Array.from(letter).forEach(function (element) {
      element.style.backgroundColor = "";
      element.style.pointerEvents = "auto";
      element.addEventListener("click", handleClick);
    });
  });
  
}

//FUNCTION TO HANDLE GAME END
function endGame() {
  gameOver = true;

  lives.innerText = "You have lost!";

  Array.from(letter).forEach(function (element) {
    element.removeEventListener("click", handleClick);
    element.style.pointerEvents = "none";
  });

  document.removeEventListener("keydown", handleKeyPress);
}

//FUNCTION TO HANDLE WIN CONDITION
function win() {
  gameOver = true;

  lives.innerText = "You win";
  lives.style.color = "yellowgreen";
  lives.style.fontSize = "27px";

  Array.from(letter).forEach(function (element) {
    element.removeEventListener("click", handleClick);
    element.style.pointerEvents = "none";
  });

  document.removeEventListener("keydown", handleKeyPress);
}
