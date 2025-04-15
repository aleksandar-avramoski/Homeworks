let output = ""; 

for (let i = 1; i <= 20; i++) {
  output += i;

  if (i % 2 === 0) {
    output += "\n";
  } else {
    output += " ";
  }
}

console.log(output); 
