const vehicle = new Set(["bike","car"]);
vehicle.add("lorry"); /*add new element*/ 
vehicle.add("truck");
vehicle.add("van");
vehicle.delete("van"); /*delete the particular element*/ 
vehicle.forEach(elements => { /*to iterate over the set */
    console.log(elements+" ");
})
console.log(vehicle.has("lorry")); /*returns true or false */
console.log(vehicle)
console.log(vehicle.keys()); /*here no keys so it returns (value,value) object set iterator this is why more compatible with map */
const iter = vehicle.values(); /*it returns object iterator */

for(const entry of iter){ /*to iterate */
    console.log(entry);
}
console.log(vehicle.size);
// vehicle.clear(); /*to clear all elements in the set */   
vehicle.add("lorry") /*no errors and assignment */
vehicle.add(null);
vehicle.add(null); /*one time null insertion is possible */
console.log(vehicle);
console.log(vehicle.size); /*returns size */
console.log(typeof vehicle);
console.log(vehicle instanceof Set);
