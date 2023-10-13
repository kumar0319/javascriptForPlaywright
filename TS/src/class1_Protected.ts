class abc1{


    protected fun1() {
        
        console.log('public fnction')

    }

}


class xyz1 extends abc1{


    public fun2() {
        
        this.fun1();
    }

}


let objCla1 = new xyz1();

objCla1.fun1();
