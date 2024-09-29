// 2 types to declare objects - 1) singleton ... 2) object literal

// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Tejas" ,
    "full name" : "Tejas Patil" ,
    [mySym] : "mykey1" ,
    age : 20 ,
    location : "Pune" ,
    email : "tejas@google.com" ,
    isLoggedIn : false ,
    lastLoginDays : ["Monday" , "Saturday"]
}

// console.log(JsUser);
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "tejas@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "tejas@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() // user defined function for object
{
    console.log("Hello JS User");
}

JsUser.greetingTwo = function()
{
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

