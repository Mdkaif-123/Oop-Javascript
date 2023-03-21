class animals{

    constructor(name){
        this.name = name;
        // console.log(`I am ${name}`);
    }

    walk(){
        console.log("Walking");
    }

    jump(){
        console.log("Jumping");
    }

}

// Consturi
class human extends animals
{
    constructor(name,gender){  
        super(name);
        this.gender = gender;
        console.log(`I am a ${this.gender}`);
    }


    eat(){
        console.log(`${this.name}, Hey I am eating`);

    }
}


const kaif = new human('Kaif',"Male");
kaif.jump();
kaif.eat();