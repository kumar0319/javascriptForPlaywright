
//Set -- is collection of elements with unique value


// let setEle = new Set();


let setEle = new Set([12,"zxc","vcc"]);


setEle.add("Rama")

setEle.add("Sita")

setEle.add("gita")

setEle.add("xyz")



// // setEle.add(page.locator(xpath))

// console.log(setEle.keys())




// console.log(setEle.size)


// setEle.forEach(function (value) {
    
//     console.log(value)
    

// })



// let webElements = page.$$("xpath");

// // order id
// // 1234
// // 4567
// // 1234

// let orders = new Set();


// let list = [];
// let i = 0;
// for (each in webElements) {
    
//     list[i] = each

//     i++
    
// }





const mapPY = new Map();
// key : value

//order id = "amzone phone for Kumar"


mapPY.set("lastNames",[{"name":"xyz"},{"name":"xyz"}])

mapPY.set("firstName","suresh")

mapPY.set("firstName ","naresh")

console.log(mapPY.size)

console.log(mapPY.get("firstName"))

//set()
// get()
// delete ()
// has()

// foreach()
// entries()


for (const x of mapPY.entries()) {
    
console.log(x)

}

mapPY.forEach(function (value, key){
    
    console.log(key + "   and its " + value)
})


