//******Try CATCH */

// let num2 = 1;

// try {
//     num2.toUpperCase();
// } catch (err) {

//     let error = "" + err;
//     if (error.includes("function")) {
       
//         console.log("you have used the function which doesnt applied for number")

//     } 
// }
// //  *****************************


// console.log("executed after catch");
  


//******Try CATCH WITH throw  */

// let num = 1;

// try {
//     throw "asdasdassd";
// } catch (err) {

//     let error = "" + err;
//     if (error.includes("asdasdassd")) {
       
//         console.log("you have used the function which doesnt applied for number")

//     } else {
        
//         throw 400

//    }

// }



// console.log("executed after catch");


//******Try CATCH WITH throw  */

// try {
    

//     // i want to client on Home page button

// } catch (err) {
    
//     if (err.includes("element is not displayed")) {
        
//         //close the dis box
//         // i want to client on Home page button


//     } else {
        
//         throw "given element is not found on the web page" + err
//     }

// }
  

///some more statments



//******Try CATCH WITH throw and finally  */

//Finally 

let knum = 1;

try {
    
  decodeURI("%%%%")

} catch (err) {
console.log(err.name)
    // let error = "" + err;
//     if (error.includes("asdasdasdas")) {
       
//         console.log("you have used the function which doesnt applied for number")

//     } else {
        
//         throw 400

//    }

}


finally {
    
    console.log("finally block")

}



// EvalError
//range error
//referance error
//Syntax error
//Typeerror 
//URI error 