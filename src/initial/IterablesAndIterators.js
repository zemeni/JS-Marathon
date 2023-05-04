//Iterator => making object iterable
//Array, Strings, Maps, Sets are iterable
let arr = [1,2,3];
for (let i of arr){
    console.log(i);
}

//what about object .. using for ..of loop in object
//Rules => When you want to make an object iterable you should have method having key value as Symbol.iterator
let obj = {
    start : 10,
    end: 15,
    [Symbol.iterator](){
        return this;
    },
    next(){
        if(obj.start <= obj.end){
            return {value:obj.start++, done:false}
        }else {
            return {done:true}
        }
    }
}

for (let o of obj){
    console.log(o);
}