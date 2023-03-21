// Destructuring is a method of JavaScript expression that makes it possible to 
// unpack values from arrays, or properties from objects, into distinct variables.

// Destructuring of array

let arr = [12, 2]
// let [a,b] = arr // here the value of array will bgiven to a and b . a and b is not an array but variables

// let arr1 = [1,21,43,2,5,67]

// let [x,y,...rest] = arr1;

// console.log(a,b);
// console.log(x,y,rest);


console.log("----------------------------------------------------");
// Destructuring of objects

let obj = {
    val1: 12,
    val2: 22
};

let {val1,val2} = obj;
let {a,b} = arr;

console.log(val1,val2);
console.log(a,b);


// console.log(m, n);