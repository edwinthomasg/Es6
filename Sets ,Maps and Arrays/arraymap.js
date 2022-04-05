let arr = [1,2,3,4,5]
let newArr = arr.map(value=> value*10)
console.log(newArr)
let names = ["edwin","vasi","saju","akash","karthik"]
let newNames = names.map(string => string.replace("vasi","vasikaran"))
console.log(newNames)
console.log(names) /*map doesnt reflect it in its original array */

console.log(arr.reduce((p,c)=>p+c,10))

// push,pop,shift,unshift,map,fill,filter,reduce,splice,slice,every,some
let sub = [99,78,35,89,39]
let res = sub.every((values)=>{
    return values > 40
})
console.log(res)
const string = sub.join('')
console.log(string)

let res1 = sub.some((values)=>{
    return values > 40
})
console.log(res1)
