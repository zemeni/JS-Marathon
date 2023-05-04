//ES5 has function scope & that is bcoz of "hoisting"
//    declaring a variable with var keyword
console.log(x);//undefined //even var x is declared below compiler brings all the declaration to one place but not the value.
var x =9;
//In ES5 We cannot have another variable with same name or with var keyword

//ES6 does not have "hoisting", it has block scope
let y =8;
{
    let y = 9;
    console.log(y); //9
}
console.log(8); //9

//similarly
console.log(a); //error bcoz hoisting is not happening here
let a = 2;
