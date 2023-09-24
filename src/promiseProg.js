

const isGood = false;

let value = new Promise(function (resolve, reject) {
    setTimeout(() => console.log('Second'), 5000);

    if (isGood) {
    
        resolve("this is good")
    } else {
        reject("bad")
}
});
console.log(value)