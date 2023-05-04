// Infinity is greater than any other value or highest possible value in JS
//positive infinity
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

//In Js value are stored in 64-bit format. If it cannot hold value greater than 64 bit we get infinity
console.log(9e4000); //Infinity
console.log(-9e4000); //-Infinity

//check positive or negative infinity
const num = 1;
if(num === Number.POSITIVE_INFINITY) ;
if (num === Number.NEGATIVE_INFINITY) ;