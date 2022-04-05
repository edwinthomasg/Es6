Person = {
    name:"edwin",
    age:21,
    role:"dev"
}

Person[Symbol.iterator] = function(){
    properties = Object.keys(Person);
    count = 0;
    done = false;

       let  next = () => {
            if(count >= properties.length)
            done = true;
            return {
                value:this[properties[count++]],done:done
            }
        }
        return {next}
    }

for(const key of Person){
    console.log(key)
}

class Bank{
    constructor(bank){
        this.bank = [].concat(bank)
    }
    [Symbol.iterator](){
        count = 0
        done = false
        let bob = this.bank
        return{
            next:()=>{
                if(count < bob.length)
               {
                return{
                    value:bob[count++],
                    done:false
                }
               }
                return{
                    done:true
                }

            }
        }
        
    }
}
let b1 = {
    name:'hdfc',
    place:'erode'
}
let b2 = {
    name:'sbi',
    place:'cbe'
}
let objects = [b1,b2]
let inst = new Bank(objects)
// inst[Symbol.iterator]()
// console.log(objects)
// for(let entry of inst)
// console.log(entry)
let itr = inst[Symbol.iterator]()
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
