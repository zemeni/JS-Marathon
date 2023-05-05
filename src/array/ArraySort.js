const arr = ["one","two","three"];
arr.sort();
console.log(arr);

//sorting in descending requires callback function

//asc
arr.sort((a,b) => {
    if(a<b) return -1;
    if(a>b) return 1;
    if(a==b) return 0;

});
console.log(arr);

//descending
arr.sort((a,b) => {
    if(a<b) return 1;
    if(a>b) return -1;
    if(a==b) return 0;

});
console.log(arr);

const array = [1,6,7,8,2,3,4];
//sorting a numeric array requires callback function otherwise it will be sorted as string
array.sort();
console.log(array);

// what will happen if there is undefined in the array
//undefined will come at the end of the array

