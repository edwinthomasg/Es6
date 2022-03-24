function display(num)
{
    const value = 100;
    console.log("before assigning : "+value);
    value = num; //cant modify once its declared and initialized
    console.log("after assigning : "+value);
}
display(200);