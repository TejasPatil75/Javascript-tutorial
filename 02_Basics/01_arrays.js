// array

const myArr = [1,2,3,4,5,6]
const myHeroes = ["iron_man" , "spider-man" , "thor"]

const myArr2 = new Array(1,2,3,4)
// console.log(myHeroes[1]);

// Array methods

// myArr.push(6) // just like push_back funcn
// myArr.pop() // removing the last ele

// myArr.unshift(9) // just like push_front func
// myArr.shift() // removing first ele

// console.log(myArr.includes(6)); // find if present or not
// console.log(myArr.indexOf(4)) 

const newArr = myArr.join() // converts to string and joins them
// console.log(myArr);
// console.log(newArr);

// slice , splice 

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr); // arr after slice opr

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C", myArr); // arr after splice opr
