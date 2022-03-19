class Person{
    constructor(name){
        this.name = name;
    }
    set name(name){
        this._name = name;
    }
    get name(){
        return this._name
    }
    display(){
        console.log("Good morning")
    }
}
class Work extends Person{
    doWork(){
        return `${this._name} is working`
    }
}
let ob = new Work("edwin")
ob.display();
console.log(ob.doWork())