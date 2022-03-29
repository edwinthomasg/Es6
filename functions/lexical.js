
// console.log(fun())
const arr = [1,2,3,4,5]
let res = arr.map((values)=>values+1
)
console.log(res)
console.log(arr)
let fil = arr.filter((values)=>{
    if(values % 2 == 0)
    return values
})
console.log(fil)
console.log(arr)
const arr2 = Array.from('edwin')
console.log(arr2)
const arr3 = Array.from(arr)
console.log(arr3)

let[x,y] = [2,3]
console.log(`${x+y}`)
function fun(){
    return [2,3,4]
}
let[a,b,c] = fun()
console.log(a,b,c)
user = {
    name:'edwin',
    gender:'male',
    show:{
        age:21
    }
}
let{name:fname,show:{age}} = user
console.log(age)

