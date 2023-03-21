// IIFE stands for Immidiate Invoked Function Expression 

// When we need to await for any promise we need to define it in a async function and every time declaring
// a async function leds to space complexity. To avoid this IIFE is used


// BASIC SYNTAX
/*

(async(){
    // body 
})();

*/


let fetch = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(121)
        },1000)
    })

}

(async() =>{

    let a = await fetch();
    console.log(a);
    let b = await fetch();
    console.log(b);
    let c = await fetch();
    console.log(c);

})();
