// const person = ['ed','th'];

// console.log(person[1]);

const person = [{
    id:1,isActive:true
},{id:2,isActive:true}
]
const display = person.filter(function(p){
    return p.isActive;
})

console.log(display);