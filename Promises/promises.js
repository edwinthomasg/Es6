const user = false
const pr = new Promise((resolve,reject)=>{
    if(user)
    resolve("success")
    else
    reject("failed")
})
pr.then((mes)=>{
    console.log(mes)
}).catch((mes)=>{
    console.log(mes)
})