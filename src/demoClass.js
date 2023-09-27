
class demoClassss{

   // constructor(){}
    constructor(num3, num4) {
        this.inClassNum1 = num3;
        this.inClassNum2 = num4;
        
        console.log(this.addition(this.inClassNum1,this.inClassNum2));

    }

    addition(num1, num2) {
        return  num1  +  num2    
    }

    
    sub(num1, num2) {
        return num1 - num2;
        }


    
}
module.exports = demoClassss;
