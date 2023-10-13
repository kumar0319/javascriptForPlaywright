interface driver{

getDriver(): void;  
setDriver():any;
closeDriver(): any;


}


class chromeDriver implements driver{

    setDriver() {
        throw new Error("Method not implemented.");
    }
    closeDriver() {
        throw new Error("Method not implemented.");
    }

    getDriver():void{

        console.log('test');

     };

}


let chrome = new chromeDriver();

chrome.getDriver();