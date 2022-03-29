// const square = function(num){ //traditional way
//     return num*num;
// }

// console.log("square result = "+square(5));

const square = (num) => num*num; //concised way of coding 

console.log("square result = "+square(5));

const arr = [1,2,3,4,"edwin"]
arr.forEach((value)=>{
    console.log(value)
})
for(let value of arr)
{console.log(value)}