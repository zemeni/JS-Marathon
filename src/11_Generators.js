//Generators can help you pause & resume code
//generators return multiple value from a function in phases
//function* is the keyword used to define a generator function
//yield is the operator which pauses the generator
//yield also helps to receive input and send output

const genFunction = function* (){
    console.log("Hello");
    yield "yieldValue";
    console.log("World");
    yield ;
    console.log("And Galaxy");
    yield ;
}

const getGenObj = genFunction();
console.log(getGenObj.next());
console.log(getGenObj.next());
console.log(getGenObj.next());
//or
for(let o of getGenObj){
    console.log(o);
}

//or
const getGenObj2 = [...genFunction()];
console.log(getGenObj2);