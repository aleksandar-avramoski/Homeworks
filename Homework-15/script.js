let table = document.getElementById('table');

//Number of columns
let columns = prompt("Enter the number of columns that you would like your table to have:");
columns = parseInt(columns);

while (columns !== null) {
    columns = parseInt(columns);

    if (!columns) {
        columns = prompt("Please enter a valid number");
    } else {
        break
    }
}

//Number of rows
let rows = prompt("Enter the number of rows that you would like your table to have:");
rows = parseInt(rows);

while(rows !== null) {
    rows = parseInt(rows);

    if (!rows) {
        rows = prompt("Please enter a valid number");
    } else {
        break; 
    }
}

//Dynamic table
let dynamicTable = `<table style="width: 100%; border: 1px solid black;">`;

for (let i = 1; i <= rows; i++) {
    //Dynamic row
    let tableRow = "<tr>";

    for (let a = 1; a <= columns; a++) {
        //Dynamic column
        let tableColumn = `<td style="border: 1px solid black; padding: 10px; text-align: center;">Column - ${a} <br> <br> Row - ${i}</td>`;
        tableRow += tableColumn;
    }

    tableRow += "</tr>";
    dynamicTable += tableRow;
}

dynamicTable += `</table>`;

//Result
table.innerHTML = dynamicTable;


