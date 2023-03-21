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

    work(){
        super.work(); // The work method is over written but using the super() we can use the method defined in the parent class
        console.log("Also for human"); // It will also have the parent method as well as it's own method
    } // This is known as method overwritting
}

let kaif  = new superHuman;
kaif.walk()
kaif.run()
kaif.work()


console.log(superHuman);
