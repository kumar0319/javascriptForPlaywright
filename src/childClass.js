
// var demoClassss = require('./demoClass.js');

var ApnService = require('./asnc.js');
// var arraysDemo = require ('./arraysDemo.js');


class childClass extends ApnService{


  async getDataFromAnotherMethod() {
    let data = await this.sendNotification();
        return data;
    }
 
  async  getdata() {
        
        return "random data"
    }
    


}

let objInhClass = new childClass();

let hm = objInhClass.getDataFromAnotherMethod().then((value) => {
  console.log(value)
},);
console.log(hm);