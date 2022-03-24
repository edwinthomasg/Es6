// var vehicle = {
//     name:"bike",
//     color:"black",
//     price:10000,
//     show:function()
//     {
//         console.log("Two wheeler");
//     }
// }

// console.log(vehicle);
// vehicle.show();
// var nam = vehicle.name;
// console.log("vehicle name : "+nam);

//es6
const vehicle = {
    name:"bike",
    color:"black",
    price:10000,
    show:function()
    {
     console.log("Two wheeler");
    }
}
const{name,color,price} = vehicle;
console.log(name,color,price);
