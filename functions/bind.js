// function test(){
//     this.name = "mango"
//    setTimeout(()=>console.log(this.name),2000)
    
// }
// (new test()); /*for each time ,this in above function changes that is it uses window object so it produces undefined */
// let fruit1 = {
//     names:"jack",
//     display : function(){
//         console.log("First = "+this.names)
//         let fun = () =>
//             console.log(this.names)
        
//         fun();
//     }
// }
// fruit1.display();

/*bind method - it takes object as param and bind them with method defined inside other object*/
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
const ob = user1.show.bind(user2) /*bind returns function */
console.log(ob("sam"))
