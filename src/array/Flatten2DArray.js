//flattening array is converting 2D,3D to single D
//reduce()
let array = [2,3,4,5];
const sum = array.reduce((accumulator, currentValue, currentIndex,array) => {
    return accumulator+currentValue;
},0);
console.log(sum);

// array.reduceRight() moves from right to left

let arr = [
    [45,90],
    [5,6],
    [2,4]
];
let fArr = arr.reduce((a,c) => {
    return a.concat(c);
},[]);
console.log(fArr);