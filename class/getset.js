class Account{
    constructor(name){
        this.name = name;
    }
    get name(){
        return this._name.toUpperCase();
    }
    set name(newName){
        this._name = newName;
    }
}
let user = new Account("Akash");
user.name = "edwin"
console.log(user.name)
