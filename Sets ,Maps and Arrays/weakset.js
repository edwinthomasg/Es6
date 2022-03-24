const sub = new Set(["maths","tamil","english"])
sub.add("science")
console.log(sub)
let arr = [...sub]
console.log(arr)
// sub = new Set(["social"]) not possible with constant keyword

/*weak set */
let marks = new Set([1,2,3,4,5,6])
console.log(marks)
let itr = marks.values();
for(const entry of itr){
    console.log(entry)
}
let user = {
    name:"edwin"
}
marks.add(user);
user = null;
marks.forEach(val=>console.log(val)) /*still name is available in set */
let mark = new WeakSet();
let us1 = {
    age:21
}
let us2 = {
    age:22
}
let us3 = {
    age:23
}
mark.add(us1);
mark.add(us2);
mark.add(us3);
us1 = null;
console.log(mark.has(us1)) /*here us1 completely destroyed and available for gc */
