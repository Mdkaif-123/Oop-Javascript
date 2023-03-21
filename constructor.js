class student {
    // constructor is the function here
    constructor(sName, sRoll, sClass) {
        this.name = sName                   // Using this keyword we can set the value for a given object
        this.roll = sRoll
        this.class =sClass
        
        console.log(`${sName} is in class ${sClass} and rollno is ${sRoll}`)
    }

    play(){
        console.log(this.name + " is playing");
    }
    study(){
        console.log(this.name + " is studying in " + this.class);
    }
    eat(){
        console.log(this.name + " is eating");
    }
}


let sam = new student('sam',12,5 );         // value should be passed while creating the object using class.
sam.play()
sam.eat()
sam.study()

