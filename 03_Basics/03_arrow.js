const user = {
    username : "tejas" ,
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
} // this keyword can be used in object

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // in node js it returns empty object -> {}
// but in browser it returns window object -> Window

// function chai()
// {
//     let username = "tejas"
//     console.log(this.username);
// }

// const chai = function()
// {
//     let username = "tejas"
//     console.log(this.username);
// }

const chai = () => { // arrow function (another way to write func)
    let username = "tejas"
    console.log(this.username);
}

// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1 , num2) => num1 + num2

// const addTwo = (num1 , num2) => (num1 + num2)

const addTwo = (num1 , num2) => ({username : "tejas"})
// for object we need to add parentheses -> ()

console.log(addTwo(3,4));

// const myArray = [2,5,3,7,8]

// myArray.forEach()
