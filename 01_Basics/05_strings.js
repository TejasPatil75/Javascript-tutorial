const name = "tejas"
const repoCount = 50 

// console.log(name  + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('tejas-tp-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('s'));

const newStr = gameName.substring(0,4)
console.log(newStr);

const anotherString = gameName.slice(-12,6)
console.log(anotherString);

const newStringOne = "      tejas       "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://tejas.com/tejas%20patil"
console.log(url.replace('%20','-'));
console.log(url.includes('pat'));

console.log(gameName.split('-'));


