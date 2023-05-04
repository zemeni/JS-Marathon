console.log("hello world");


//undefined
let x;
console.log(x); // undefined //before a value is assigned to the variable, the variable contains undefined.
console.log(typeof x); //undefined

//null
//when you want to assign empty value to a variable
let y = null;
console.log(y); //null

//comparison
let z = null;
let a;
//comparing undefined==null & undefined === null
console.log(z == a); //true bcoz both undefined and null represents nothing
console.log(z===a); //false bcoz they represent different data types

//can you explicitly assign "undefined" to a variable? yes
let b = undefined;
console.log(b);