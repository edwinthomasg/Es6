function display(num)
{
    if(num < 5)
    {
       let value = 100;
        console.log(value);
    }
    else{
        var value = 200;
        console.log(value); //returns error so let doesn't permits redeclaration and its block level
    }
    console.log(value);
}

display(4);