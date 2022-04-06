console.log("Print statement before promise")
const alphaRegex = /^[a-zA-Z]+$/
let name = 'Edwin'
const pr = new Promise((resolve,reject)=>{
    if(alphaRegex.test(name) == true)
    resolve("Valid Name")
    else
    reject("Invalid Name")
})
pr.then((success)=>console.log(success)).catch((failure)=>console.log(failure))
console.log("Print statement after promise")
function show(){
    console.log("Function")
}
show()
let set = new Set([1,2,3])
set.forEach((value)=>console.log(value))
for(let val of set)
console.log(val)
async function display(){
    return "Hello"
}
display().then((msg)=>console.log(msg))