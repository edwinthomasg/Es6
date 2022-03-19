let arr = [1,2,3,4,5]
let newArr = arr.map(value=> value*10)
console.log(newArr)
let names = ["edwin","vasi","saju","akash","karthik"]
let newNames = names.map(string => string.replace("vasi","vasikaran"))
console.log(newNames)
console.log(names) /*map doesnt reflect it in its original array */