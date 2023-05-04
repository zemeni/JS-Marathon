const sum = function (a){
    return function (b){
        return a+b;
    }
}

//arrow func
const sum1 = (a)=> {
    return (b)=>{
        return a+b;
    }
}

//again
const sum2 = a => b => a +b;

const cl = sum(5);
const ans = cl(6);
console.log(ans);
//or
const res = sum(5)(6);
console.log(res);

//use case
const PriceCalc = (price) => {
    return (dPer) =>{
        return price * dPer;
    }
}

const discountAmount  = PriceCalc(300);
console.log(discountAmount(0.5));
console.log(discountAmount(0.6));
console.log(discountAmount(0.7));

