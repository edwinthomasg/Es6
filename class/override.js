class Bank{
    constructor(name){
        this.name = name;
    }
    display(){
        return `Hi ${this.name} , Greetings.`
    }
}
class Hdfc extends Bank{
    display(){
        return `Hi ${this.name} , thankyou.`
    }
}
const user = new Bank("Edwin");
const user2 = new Hdfc("Akash")
console.log(user.display());
console.log(user2.display())