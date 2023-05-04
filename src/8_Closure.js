//when a function comes under another function a closure is created
//closure pattern remembers outer variable & also helps to access outer scope members

function outer() {
    function inner() {
        console.log("inner called");
    }

    inner();
}

outer(); //calling inner func

//another way
function outer1() {
    function inner1() {
        console.log("inner1 called");
    }

    return inner1; //returning inner func reference
}

const cl = outer1();
cl(); //although inner() has private access we returned it and made available

//or
function outer2() {
    return function () {
        console.log("returning inner");
    }
}

const cl2 = outer2();
cl2();

//using es6
const outer3 = () => {
    return () => {
        console.log("returning inner3")
    }
}

const cl3 = outer3();
cl3();

//use case
const addCounter = () =>{
    let counter =0;
    counter++;
    return counter;
}

console.log(addCounter()); //1
console.log(addCounter()); //1
console.log(addCounter()); //1
console.log(addCounter()); //1

//we want counter to be incremented but don't want to shift the counter as global variable

const addCounter1 = () => {
    let counter = 0;
    return () => {
        counter ++;
        return counter;
    }
}

const addC1 = addCounter1();
console.log(addC1());
console.log(addC1());
console.log(addC1());
console.log(addC1());

//Q. How can we access private variable or function outside the scope? => closure


