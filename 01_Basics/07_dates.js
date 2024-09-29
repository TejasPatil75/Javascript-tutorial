// Dates 

let myDate = new Date() // date object created
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// let myCreatedDate = new Date(2023, 0 , 23) // months start from 0 in js
// let myCreatedDate = new Date(2023, 0 , 23 ,5 , 3) 
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023") 

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() 

// console.log(myTimeStamp); // gives value in milliseconds
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //as month starts from 0
console.log(newDate.getDay());

// console.log(`The month is ${newDate.getMonth()} and the day is ${newDate.getUTCDay()}`);
console.log(newDate.toLocaleString('default' , {
    weekday : "long"
}));

// newDate.toLocaleString('default' , {
//     weekday : "long"
// })



