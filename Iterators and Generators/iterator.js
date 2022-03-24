let arr = [1,2,3,4,5]
for(let val of arr){
    console.log(val)
}
let arr1 = [1,2,3,4,5]
let itr = arr1.values()
for(let val of arr1){
    console.log(val)
}
let set = new Set(["edwin","thomas",21])
for(let val of set)
console.log(val)
let map = new Map([["color","black"]])
map.set("name","edwin")
map.set("age","thomas")
console.log(map)
for(let kval of map)
console.log(kval)
let arr2 = [1,2,3,4,5,6,7,8,9,10]
let it = arr2.values()
let nxt = it.next()
while(!nxt.done){
    console.log(nxt.value)
    nxt = it.next();
}
