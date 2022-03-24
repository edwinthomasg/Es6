// /* destructuring means extracting the data or properties from array or object to a distinct variable */
// let arr = [1,2,3,4,5,"edwin"]
// console.log(arr)
// let [a,b,c,d,...rest] = arr /*array destructuring */
// console.log(...rest)
// let x = 2;
// let y = 3;
// [x,y] = [y,x];

// console.log("x:"+x+" "+"y:"+y)
// /*Object destructuring */
// let user = function(){
//     return{
//         name:"akash",
//     age:21,
//     set:{
//         color:"black"
//     }}
// }
// function ret(){ /*from functuring destructuring */
//       return [,1,2] /* , used to skip assignment so here l gets undefined value */
// }
// let [l,m,n] = ret();
// console.log("l = "+l+" m = "+m+" n = "+n)
// // let {name:uname,age:uage} = user /*left side variable - property and  right side variable is variable eg:name-property and uname - variable */
// // console.log(uname)
// // let {fname,age} = user /*in this case, if property and variable are same then no need to specify the variable like above */
// // console.log(name)
// let {name,age,set:{color}} = user();
// console.log(color)
// let fruits = {
//     name:"mango",
//     price:20,
//     fruit:{
//         shop:"apple"
//     }
// }
// let{name:nam,price,fruit:{shop}}=fruits
// console.log(shop)

let vehicle = ["bike","1","car"]
let[,,k] = vehicle
console.log(k)
const person = {
    name: 'Jesse',
    age: 30, 
    address: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
  }
  function display({address:{state}})
  {
      console.log(state)
  }
  display(person)