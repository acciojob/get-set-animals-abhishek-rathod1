//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}
	get species(){
		return this.species;
	}
	makeSound(){
		return console.log(`The ${this.species} makes a sound`);
	}
}

class Dog extends Animal {
	bark(){
		return console.log("woof");
	}
}

class Cat extends Animal {
	purr(){
		return console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
