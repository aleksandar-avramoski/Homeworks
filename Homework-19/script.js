class Animal {
    constructor(name, type, age, size, isEaten = false) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = isEaten;
    }

    eat(food) {
        if (food instanceof Animal) {
            if (this.type === "herbivore") {
                console.log(`The animal (${this.name}) is a herbivore and does not eat other animals`);
            } else if (food.size > this.size) {
                console.log(`The animal (${this.name}) tried to eat the (${food.name}) but it was too large.`)
            } else {    
                food.isEaten = true;
                console.log(`The animal (${this.name}) ate the (${food.name})`);
            }

        } else {
            console.log(`The animal (${this.name}) is eating (${food})`);
        }
    }
    
}

let lion = new Animal("Lion", "carnivore", 5, 210);
let elephant = new Animal("Elephant", "herbivore", 10, 600);
let rabbit = new Animal("Rabbit", "herbivore", 2, 2);

lion.eat(elephant);
elephant.eat(rabbit);
lion.eat(rabbit);
rabbit.eat("carrot");