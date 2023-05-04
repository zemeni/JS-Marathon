//rest operator => rest of the parameters
function add(...nums){
    console.log(nums);
}

add(3,4);
add(1,2,3);

//rest parameter should be at last
function sum(a, ...b){

}
sum(1);
sum(1,2,3);

//spread operator => spread params
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let result = [...arr1, ...arr2];
console.log(result);
console.log(Math.max(...arr2));

//use case
let arr_x = [1,2,3,4];
let arr_y = arr_x; //not good approach
let arr_z = [...arr_x]; //good



