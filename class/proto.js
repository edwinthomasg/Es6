class Person{
    constructor(name){
        this.name = name;
    }
}
let user = new Person("edwin")
user.age = 21; /*here only user gets property of age and not aUser */
let aUser = new Person("Akash");
console.log(user.name+" "+user.age)
console.log(aUser.name+" "+aUser.age)
Person.prototype.age = 21; /*so to apply to all objects and functions prototype is used */
console.log(user.name+" "+user.age)
console.log(aUser.name+" "+aUser.age)
function construct(name,age,color){ /*this is for object constructors */
    this.name = name;
    this.age = age;
    this.color = color;
}
construct.prototype.gender = "male"
const ob = new construct("gangz",21,"white");
console.log(ob.gender)