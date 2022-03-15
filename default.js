// function multiply(a,b)
// {
//     a = a || 1;
//     b = b || 1;
//     return a*b;
// }

// var res = multiply();
// console.log(res);

const multiply = (a=1,b=1) => a*b;
const res = multiply(2,10);
console.log(res);
