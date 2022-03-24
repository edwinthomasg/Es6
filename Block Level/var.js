function display(num)
{
    /*var value --- js view (hoisting)*/
    if(num < 5)
    {
         var value = 100;
        console.log(value);
    }
    else{
        console.log(value); //returns value = undefined so var permits redeclaration and its not block level
    }
}

display(6);

console.log(a) //a is not defined because hoisting applied for only declarations part and assignment remains in same place
var a = 10

function show(flag){
    if(flag){
        var x = 20;
    }
    return x;
}
console.log(show(false))