let string = "this is jaVascript course jaVascript jaVascript jaVascript "


let isExists = string.match(/jaVascript/g)

string= string.replace("jaVascript", "TypeScript")


console.log(isExists)

console.log(string)

// [abc]
// [0-9]

let patChar = " is 123 this 2556 greath product "

let result = patChar.match(/[rea]/g)
let result2 = patChar.replace(/[0-9]/g,'')
let result3 = patChar.replace(/\s/g,'')
result3 = parseInt(result3.replace(/[abcsefghijklmnopqrstud]/g, ''))+100000000;

console.log(result)
console.log(result2)
console.log(result3)

