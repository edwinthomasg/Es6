function *display(){
    yield 1;
    console.log("1st yield")
    yield 2;
}
const ob = display();
console.log(ob.next())
console.log(ob.next())
console.log(ob.next())