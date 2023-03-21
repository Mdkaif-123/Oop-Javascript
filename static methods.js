class user {
    constructor(userName,password) {
        this.name = user.capitalize(userName);
        this.pass = password;

        console.log(`Hello, ${this.name} Welcome to the coding world`)
    }

    // Static methods / functions are the function that belongs to the class and cannot be used by the object 



    // Here is the example of the static class that convert the string to upper case but it cannot be used by the any object belonging to that class

    static capitalize(string){
        let result =  string.charAt(0).toUpperCase()+ string.substring(1, string.length)
        return result;
    }
}

let newUser = new user('kaif ansari',"Hello" );