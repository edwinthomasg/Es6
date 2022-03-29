const type1 = ["c","c++","java"]
const type2 = ["html","css","js"]
const joined = [...type1,...type2]
console.log(joined)
function add(a,b,c){
    return a+b+c
}
let arr = [1,2,3]
console.log(add(...arr))
const age = 16
const pr = new Promise((resolve,reject)=>{
    if(age > 18)
    {
        resolve("success")
    }
    else
    reject("failed")
})
pr.then((mes)=> console.log(mes)).catch((err)=>console.log(err))