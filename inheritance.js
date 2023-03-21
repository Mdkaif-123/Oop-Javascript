class human {
    walk(){
        console.log("Walking");
    }
    run(){
        console.log("Running");
    }
    work(){
        console.log("Working");
    }
}

class superHuman extends human {
    fly(){
        console.log("Flying");
    }
    climb(){
        console.log("Climbing");
    }
}

let kaif  = new superHuman;
kaif.fly();
kaif.climb()
kaif.walk()
kaif.run()
kaif.walk()

console.log(superHuman);
