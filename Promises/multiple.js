let age =  19
let citizenship = 'american'

const p1 = new Promise((resolve,reject)=>{
    if(age > 18)
    resolve("You are eligible now")
    else
    reject("You are not eligible")
})
const p2 = new Promise((resolve,reject)=>{
    if(citizenship == 'india')
    resolve("You are eligible to vote")
    else
    reject("Not eligible")
})
Promise.all([p1,p2]).then((success)=>{
    console.log(success)
}).catch((failure)=>{
    console.log(failure)
})
let arr = [1,2,3,4,5]
let[a,b,c,d,e] = [...arr]
console.log(d)