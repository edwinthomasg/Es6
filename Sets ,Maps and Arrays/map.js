// const fruit = ["mango","grape","orange","banana"];
// const newList = fruit.map(item => item+"fruit");
// console.log(newList);

//filter
const fruit = ["mango","grape","orange","banana"];
const newList = fruit.filter((item,index)=>{
    if(item === "grape")
    console.log(index);
});

