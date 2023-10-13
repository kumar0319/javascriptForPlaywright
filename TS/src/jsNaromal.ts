interface driver{

    getDriver(): void;  
    setDriver():any;
    closeDriver(): void;
    
    
    }
    
    
    class chromeDrivers implements driver{
    
        setDriver() {
            throw new Error("Method not implemented.");
        }
        closeDriver():Error {
            throw new Error("Method not implemented.");
        }
    
        getDriver():void{
    
            console.log('test');
    
         };
    
    }
    
    
    let chromes = new chromeDriver();
    
    chromes.getDriver();


// opps
// inheritence
// class and objects
//interfaces
// poly and abstaraction 
// access mod
    