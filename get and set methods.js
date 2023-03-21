class Animal{
    constructor(name) {
        this.name = name;

        console.log(`Hey my name is ${this.name}`);
    }

    jump(){
        console.log("I am jumping");
    }

    get animal(){
        return this.name;
    }

    set animal(newName){
        this.name = newName;
    }

}

class dog extends Animal{
    bark(){
        console.log("Dog is baking");
    }
}

let me = new dog('Kaif');


console.log(me.animal);
me.animal = "Wasim";
console.log(me.animal);


// Instance of a method to check whether the object belogs to that class or not.

console.log(me instanceof dog);  // Here me belogs the class dog as well as Animal 
console.log(me instanceof Animal); // beacuse animal is dog is inherited from Animal 






