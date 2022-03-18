function ret(a=10,b=5,c=8){ /*default params..when variable is undefined explicitly or implicitly if initialization is given by default*/
    return [a,b,c]
}
const result = ret(1,undefined);
console.log(result)

function show(a=10){
     return a
}
console.log(show(null)) /*if null is passed then a gets assigned with null and if undefined is passed default assignment takes place */
