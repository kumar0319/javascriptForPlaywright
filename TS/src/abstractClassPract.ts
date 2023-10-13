
abstract class person {

    PersonFullName(){
    
    console.log('James K')
    }
    
    abstract PersonFamily():void
    
    
    
    }
    
    
    class James extends person{
    
    PersonFamily(){
    console.log('James family')
    this.PersonFullName();
    
    }
}
    

let jamesClass = new James();

jamesClass.PersonFamily();
