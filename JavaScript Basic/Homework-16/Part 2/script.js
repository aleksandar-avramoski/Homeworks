let button = $('button');

button.click(function() {
    let textInput = $("#textInput").val();
    let colorInput = $("#colorInput").val();

    $("h3").remove();
    $("h1").remove();

    if (textInput.length === 0) {
        button.after('<h3>Empty input!</h3>');
        return;
    }

    let colors = ["red", "blue", "green", "yellow", "black", "white", "gray", "orange", "purple", "pink"];

    if (colorInput.length === 0 || !colors.includes(colorInput.toLowerCase())) {
      colorInput = "black";
    }
    
    button.after(`<h1 style = "color: ${colorInput}"> ${textInput} </h1>`);
}); 