class animal {
    walk(){
        console.log("Walking");
    }
}

class dog extends animal{
    walk(){
        console.log("Walking");
    }
}

class rabbit extends animal{
    rabbit(){
        console.log("rabbit");
    }
}

class cat extends animal{
    cat(){
        console.log("cat");
    }
}



let cats = new cat()
cats.walk();
cats.cat();