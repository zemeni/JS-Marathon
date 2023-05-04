//"this" doesn't work with arrow function
// cannot use "new" to call arrow function

//IIFE -Immediately Invoked Arrow Function
(function (){
    console.log('it calls itself')
})();

(()=> {
    console.log('arrow function for IIFE');
})();

const test = () => {
    console.log("cannot create with new")
}

const t = new test(); //error
