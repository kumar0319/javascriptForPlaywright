
let grab = "test data"

//Block scope
{
    console.log(grab+" this is in the block scope ")
    var a = 2;

}

a = 66666;

console.log(a);


//function scope

function demoBlock() {
    grab= "Changed data "
    console.log(grab+" this is in function ")

    var xyz ="name"

}

demoBlock()

const objectOfClass = new demoClass();



// Global Scope 