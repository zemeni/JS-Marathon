//when there is a line break JS automatically inserts semicolon
//In some case JS doesn't insert semicolon
let a = 4*
    5
console.log(a);

//scene2

function test1(){
    return
    {a:5}
}
function test2(){
    return {a:5}
}

console.log(test1()); //undefined
console.log(test2()); //{a:5}

//using "use strict" doesn't mean you have to end all lines with ;