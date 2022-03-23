function fun(){
    console.log("Defined function")
}
fun();
function fun1(){
   return "Returned function"
}
console.log(fun1())
function sum(a,b=1){ /*default asignment */
    return a+b;
}
let res = sum(1)
console.log(res);
function rest(...par){
      console.log("length="+par.length)
}
rest();
rest(1);
rest(1,"edwin");
rest(1,2,3,4);
rest(1,2,2,3,4,7)
let sq = function(a,b){ /*anonymous */
      return a*b;
}
console.log(sq(2,2))
const arr = (a,b) => {
    console.log(`addition = ${a+b}`)
}
arr(2,2)
function con(name,age){
    this.name = name;
    this.age = age;
}
let boy1 = new con("edwin",21);
let boy2 = new con("akash",20)
console.log(boy1.name+" "+typeof boy1+" "+boy2.age)