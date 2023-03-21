// EXAMPLE 1


// class Human {

//     run(){
//         console.log("Running");
//     }
//     eat(){
//         console.log("Eating");
//     }
//     speak(n){
//         this.name = n;
//         console.log(`My name is ${this.name}`);
//     }

// }

// let kaif = new Human();

// kaif.eat();
// kaif.speak("Kaif");

// EXAMPLE 2


class addmissionForm {
    register(name,roll){ 
        console.log(`Hello ${name}, Welcome to IIT Dhanbad, Your rollno is ${roll} `);
    }

    submit(){
        console.log("Your application has been submited.");
    }

    cancel(name){
        console.log(`Cancelling application of ${name}`);
        let a = true;
        console.log('Please confirm...! Y/N');
        if(a){
            name = null;
        }
    }
}

let kaifForm = new addmissionForm();

kaifForm.register('Kaif', 12);
kaifForm.submit();
kaifForm.cancel("Kaif");

