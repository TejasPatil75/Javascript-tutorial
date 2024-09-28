// Primitive 

// 7 types : String , Number , Boolean , null , undefined , BigInt

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail 

const id = Symbol('123')
const AnotherId = Symbol('123')

console.log(id === AnotherId);
// console.log(id); Symbol(123)
// console.log(AnotherId); Symbol(123)

// const bigNumber = 342787425873458587258n  // BigInt

// Reference ( Non Primitive )

// Array , Objects , Functions

const heros = ["shaktiman" , "nagraj" , "doga"] ;
let myObj = {
    name : "tejas" ,
    age : 20,
}

// console.log(myObj);

const myFunction = function()
{
    console.log("Hello World");
}
// output : 
// Hello World
// undefined

console.log(myFunction());

