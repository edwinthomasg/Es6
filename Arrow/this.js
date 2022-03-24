const vehicle = {
    name:"bike",
    color:"black",
    price:10000,
    show:function()
    {
     console.log("Two wheeler = "+this.name);
     display = ()=>console.log(this.name+": milege = 35km");
    //  display = function(){
    //     console.log(this.name+": milege = 35km");
    //    }
     display();
    }
}
vehicle.show();
