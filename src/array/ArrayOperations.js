//push() --add at last
//pop() --remove from last
//shift() -- remove from first
//unshift() --at at first

//splice() --can add,insert, replace, remove
//arr.splice(start,[deleteCount[,value1,...,valueN]])
//start --start the operation from
//deleteCount --
//,value1,..,valueN -- value you want to add or replace

const arr = ["one","two","three","four"];
console.log(arr.splice(2)); //from 2nd index delete all
console.log(arr.splice(2,1)); //from 2nd index delete 1
console.log(arr.splice(2,1, "five", "six")); //from 2nd index delete 1 and add "five" , "six" on that position
console.log(arr.splice(arr.length,0, "five", "six")); //inserts at last
console.log(arr);

//search
//indexOf() --arr.indexOf(el,[startIndex]); returns -1 if not found
//lastIndexOf() --returns -1 if not found
//includes() --arr.includes(el,[startIndex]); --returns true or false
//find(callback) -- can take callback --returns single value --return undefined if no value
//findIndex(callback) --returns single value --returns undefined if no value
//filter(callback) --  returns new array --returns undefined if no value


