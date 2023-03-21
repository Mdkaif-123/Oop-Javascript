// Clousers is a function that is returned along with it's lexical enviroment.

// EXAMPLE OF CLOUSER()

// Here is a main() that return an another function 

function main(){
    let name = "Kaif"; // A name has been declared

    function printName(){
        console.log(name) // Name has been loged
    }
    // name = "John" // Name has been updated

// As we know that the lexical enviroment is retuned but the value of variable is not returned but the refrence is returned

    return printName;
    
}

let Clousers = main(); // Here main() return the printName() with it's lexical enviroment 

Clousers(); // And when we call the Clouser() which is a printName() it will print the names
