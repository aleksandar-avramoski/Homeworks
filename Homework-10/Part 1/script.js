//Getting type
function getType(value) {
    let type = typeof(value);
    console.log("The type of the given value is:" + " " + type);
    return type;
}

//String
getType("Hello World");

//Number
getType(45);

//Boolean
getType(true);

//Object
getType({name: "Aleksandar"});

//Undefined
getType();