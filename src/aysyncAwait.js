
class AsyncAwait {


    async functionName2() {
        
        let numb =  await this.functionName1();
        console.log(numb)

        return numb;
    }


    async functionName1() {

        var add=1;
        for (var i = 0; i < 100000000; i++){
            add++



        }
        return add;

    }

}

let clsObj = new AsyncAwait();

console.log( clsObj.functionName2().then(function(value) {console.log(value)}));
console.log("After All done");