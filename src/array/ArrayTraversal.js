let arr1 = [4,5,6];
let arr2 = [2, true, "hello"] //accepted in JS

let arr = [
    {pCode:1, pName:'Apple'},
    {pCode:2, pName:'Banana'},
    {pCode:3, pName:'Orange'}
]

console.log(arr[0].pName); //Apple

//traversal
let array = ["ES5","ES6","ES7","ES8"];
//for...in
for(let e in array){
    console.log(e); //return index
}
//for...of
for(let e of array){
    console.log(e); //return value
}

//print both element and index
array.forEach((element,index) => console.log(element, index));
//you cannot break forEach
array.forEach((e,i) => {
    console.log(e,i);
    if(i ==2){
        // break; //this wont work
    }
})