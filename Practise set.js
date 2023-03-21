// Q.1 Write a program of class complex having two values real and imaginary

class complex{
    constructor(real,imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }
// Q.2 Write a method that adds two complex number (means add both real and imaginary number)


    add(num){
        this.real = this.real + num.real;
        this.imaginary = this.imaginary + num.imaginary;
    }

    get number(){
        return [this.real, this.imaginary]
    }

    set number(r){
        this.real = r.real;
        this.imaginary = r.imaginary;

        console.log([this.real,this.imaginary]);

    }
}

let number1 = new complex(12,22)
let number2 = new complex(23,7)

console.log(number1.number);
number1.number = number2;

// number1.add(number2);

// console.log(`${number1.real} : ${number1.imaginary}`)

// ---------------------------------------------------------------------------------------------------------

// Q.3 Create a class student from human override a method and see the changes

// class human{
//     constructor(name){
//         this.name  = name;
//         console.log(`Hey I am ${this.name}`);
//     }

//     walk(){
//         console.log(`I am walking`);
//     }
// }

// class student extends human{

//     walk(){
//         super.walk();

//             console.log("I am also studying");

//     }
// }

// let chunnu = new student('Chunnu')

// chunnu.walk();


// // Q.4 Check the instance of object

// console.log(chunnu instanceof student)
// console.log(chunnu instanceof human)