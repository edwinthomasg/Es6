const languages = new Array("c","c++","java","python");
const arr = ["Emil", "Tobias", "Linus"];
 languages.push("html"); /*add element at last */
 languages.push(6);

console.log(languages)
const res = languages.concat(arr); /*join other array with this */
console.log(res)
languages.shift(); /*delete at first */
console.log(languages) 
languages.unshift("vasi"); /*insert at first */
console.log(languages)
console.log(languages.indexOf("html"))
languages.push("java")
console.log(languages.lastIndexOf("java")) /*returns last index */
const numbers = new Array(1,4,2,5,8,6,3);
numbers.sort(); /*it will sort the array */
console.log(numbers);
console.log("array size "+numbers.length);
numbers.forEach(num => {
    console.log(num);
})
console.log(typeof languages); /*arrays are objects */
const arrayStr = languages.join("");/*array to strings */
console.log(arrayStr)
// delete numbers[1];
console.log(numbers)
languages.splice(2,0,"css");
console.log(languages)
languages.splice(1,3,"php");
console.log(languages)
const spl1 = numbers.slice(1)
console.log(spl1)

const spl2 = numbers.slice(2,5);
console.log(spl2);
console.log(languages.toString())

console.log(languages.reverse())