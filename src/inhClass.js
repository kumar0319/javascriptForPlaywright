var ParentClass = require('./parentClass.js');



class childClass2 extends ParentClass{

    constructor(num3,num4){

        super(num3,num4)

    }

}

module.exports = childClass2;


let childC = new childClass2(50, 50)

console.log(childC.dummyAddition());

console.log(childC.dummyAddition2());


