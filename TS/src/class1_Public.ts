class abc{


    public fun1() {
        
        console.log('public fnction')

    }

}


class xyz extends abc{


    public fun2() {
        
        this.fun1();
    }

}


let objCla = new xyz();

objCla.fun1();
