class Bank{
    constructor(name,account,balance){
        this.name = name;
        this.account = account;
        this.balance = balance;
    }
    display(){
        console.log("Name : "+this.name+" "+"Acc : "+this.account);
    }
}
class Balance extends Bank{
    show(){
        console.log("Name : "+this.name+" "+"Acc : "+this.account);
    }
}
const person1 = new Balance("edwin","savings",20000);
person1.display();
person1.name = "thomas"
person1.show();