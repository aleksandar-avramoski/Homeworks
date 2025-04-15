const fs = require('fs');
const path = require('path');

//File path
const filePath = path.join(__dirname, "homework.txt")

//Write File
fs.writeFile(filePath, "Homework 02 in Basic Node", (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("File created and content written!");

    //Append File
    fs.appendFile(filePath, "FINISHED", (err) => {
        if (err) {
          console.error(err);
          return;
        }

        console.log("Text appended");
    });

    //Read File
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      
      console.log("File Contents:", data);
    });
});