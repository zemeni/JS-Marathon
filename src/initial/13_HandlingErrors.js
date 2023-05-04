//handle and display proper message to user
try{
    const a = 10;
    console.log(`value of a is ${a}`);
    constb=20;
    console.log(`value of b is ${20}`);
}catch (err){
    console.log(`error occurred`);
    console.log(err.name);
    console.log(err.message);
    // console.log(err.stack);
}


//creating error
let x = 10;
let ageErr = new Error("Invalid Age");
try{
    if(x<18){
        throw ageErr; //custom
        // throw  new TypeError("Invalid Age"); //JS
    }else {
        console.log(a);
    }
}catch (err){
    console.log(err.message);
}finally {
    console.log('Final code');
}