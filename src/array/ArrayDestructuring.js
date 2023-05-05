const arr = [80,90,93,26];
let [a,b,c,d] = arr;
console.log(a,b,c,d);

function test(){
    return [80,90,93,26];
}

//returning from function
//skipping value
let [x,,y,z] = test();
console.log(x,y,z);

//swapping value
let p=4;
let q=5;

[p,q] = [q,p];
console.log(p,q);

//using rest operator

let [m,...n] = arr;
console.log(m,n);

//default value

let arr1 = [4];
let [r,s=0] = arr1;
console.log(r,s);