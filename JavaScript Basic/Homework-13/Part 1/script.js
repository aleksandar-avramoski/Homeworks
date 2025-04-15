let dogName = prompt("Enter dog name:");
let dogKind = prompt("Enter dog kind:");

let animal = {
    name: dogName,
    kind: dogKind,

    speak: function(message) {
        return `${this.name} says: ${message}`; 
    }
};

console.log(animal.speak("Hey bro!!!"));
