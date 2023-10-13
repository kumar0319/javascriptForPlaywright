class abc2{


    private fun1() {
        
        console.log('public fnction')

    }

}


class xyz2 extends abc2{


    public fun2() {
        
        this.fun1();
    }

}


let objCla2 = new xyz2();

objCla1.fun1();
