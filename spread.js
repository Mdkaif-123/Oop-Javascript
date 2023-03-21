// The spread (...) syntax allows an iterable, such as an array or string,
//to be expanded in places where zero or more arguments (for function calls) or elements 
//(for array literals) are expected.


// Spread syntax with array and object

let arr = [12,22,34,56];

let obj= {...arr}

console.log(obj);

// we can also pass all the element of an array as an argument
let arr1 = [1,2,3];

let sum =(a,b,c) =>{
    return a+b+c;
}

let addition = sum(...arr1) // by using this syntax array element can be given as argument

console.log(addition);

const user = {
    name: "Kaif",
    branch : "Co",
    college : "Jamia"
}

console.log({...user, name: "JOHN"})

console.log(user);

