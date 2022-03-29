function fun1(){
    let name = "edwin"
    function fun2(){
        console.log(name)
    }
    return fun2;
}
const fun = fun1();
fun()