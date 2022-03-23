let map = new Map([["edwin",21],["Akash",20]])
console.log(map)
console.log(map.get("edwin")) /*returns value of a key */
map.set("vasi",19); /*to add new key value pair */
map.set("karthik",18);
map.set("saju",23);
map.forEach((val,ky)=>{ /*foreach to iterate map with two paramters */
    console.log(val+":"+ky)
})
console.log(map.has("Akash")) /*returns boolean result */
const entry = map.entries();

for(const pair of entry){
    console.log(pair)
}
map.delete("edwin")
map.forEach((val,ky)=>{ /*foreach to iterate map with two paramters */
    console.log(val+":"+ky)
})

const values = map.values();
for(const val of values){
    console.log(val)
}
const keys = map.keys();
for(const ky of keys){
    console.log(ky)
} /*map is also a object  */
map.set("null",null)
map.set("null",null) /*not possible - key should not be duplicate */
console.log(map);
map.set("ori",null)
console.log(map)
map["aakash"] = 30;
console.log(map.get("vasi"))