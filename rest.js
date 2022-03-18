function display(a,b=2,...param){
     console.log("a = "+a+" b = "+b+" param = "+param)
     console.log(param[0])
}
display(1,4,6,8,9,0,6);

function add(){
    return arguments[1] + typeof arguments /* we can pass n number of params without having a formal params by using arguments but that is not a complete array*/
}
console.log(add(1,2,3,4))

// function add(){
//     arguments.forEach(element => { this is not possible because argument is  not a array to have foreach method so we will go for rest params
//         console.log(element)
//     });
// }
// console.log(add(1,2,3,4))

function add(...ele){
    let sum = 0
    ele.forEach( val => {
        sum = sum + val
    } )
    return sum;
}
console.log(add(1,2,3,4))