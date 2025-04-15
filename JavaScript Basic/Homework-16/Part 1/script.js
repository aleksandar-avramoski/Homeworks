let button = $('button');
let h1 = $('h1');

button.click(function() {
    let input = $("input").val();
    h1.text("Hello there " + input + "!");
});