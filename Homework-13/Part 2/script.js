let bookTitle = prompt("Enter the book title:");
let bookAuthor = prompt("Enter the author's name:");

function getReadingStatus() {
    while (true) {
        let input = prompt("Have you read this book? (yes/no):");
        input = input.toLowerCase(); 

        if (input === "yes") {
            return true; 

        } else if (input === "no") {
            return false;
            
        } else {
            alert("Invalid input! Please enter 'yes' or 'no'."); 
        }
    }
}

let book = {
  title: bookTitle,
  author: bookAuthor,
  readingStatus: getReadingStatus(),

  displayStatus: function () {
    if (this.readingStatus) {
      console.log(`Already read '${this.title}' by ${this.author}.`);
    } else {
      console.log(`You still need to read '${this.title}' by ${this.author}.`);
    }
  },
};

console.log(book.displayStatus());