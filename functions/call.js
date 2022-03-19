let user1 = {
    gender:"Boy",
    show:function(name){
        return `gender = ${this.gender} , name = ${name}`
    }
}
let user2 = {
    gender:"Girl"
}
const res = user1.show("edwin");
console.log(res)
const ob = user1.show.call(user2,"sam") /*we can bind method at the same time we can pass params and call returns result not a function */
console.log(ob)
