//Not a Number
const a  = 10;
const b = "hello";
console.log(a *b); //NaN
//NaN
if (isNaN(a*b)){
    console.log("wrong data format")
}else{
    console.log(a*b);
}

//it doesn't match with itself
console.log(NaN == NaN); //false
console.log(NaN === NaN); //false

//isFinite() => not only checks for NaN but also for +INFINITY and -INFINITY
//             => checks whether it is regular number or not
console.log(isFinite(a*b)); //false
console.log(isFinite(4*5)); //true
console.log(isFinite(Number.MAX_VALUE*2)); //false
console.log(isFinite(Infinity)); //false