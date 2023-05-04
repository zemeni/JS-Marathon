//map() returns the new array and doesn't change the original one
//transforms the array
//map(callback)
const arr = ["one","two","three"];
const arrLength = arr.map(e => e.length);
console.log(arrLength);

let products = [
    {pCode:1,pName:"Apple"},
    {pCode:2,pName:"Banana"},
    {pCode:3,pName:"Orange"},
]

const names = products.map(e => e.pName);
console.log(names);