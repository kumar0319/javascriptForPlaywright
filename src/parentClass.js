
class ParentClass{


    constructor(num1, num2) {
        
        this.parentNum1 = num1;
        this.parentNum2 = num2;


    }

    async dummyAddition() {
        
        return this.parentNum1+this.parentNum2
    }

    async dummyAddition2() {
        
        return this.parentNum1+this.parentNum2
    }


}
module.exports = ParentClass;
