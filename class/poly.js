class Delivery{
    calculate(amount){
       return amount;
    }
    calculate(amount,discount){
        let price = (amount * (discount / 100));
        let finalPrice = amount - price;
        return finalPrice;
    }
}
const order = new Delivery();
console.log(order.calculate(30000))
console.log(order.calculate(30000,20));