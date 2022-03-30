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

