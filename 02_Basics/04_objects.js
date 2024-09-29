// const tinderUser = new Object() 
const tinderUser = {} // declared as a object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com" ,
    fullname : {
        userfullname : {
            firstname : "tejas" ,
            lastname : "patil"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj4 = {5 : "a", 6 : "b"}

// const obj3 = {obj1 , obj2} // creates obj in obj not good method
const obj3 = Object.assign({}, obj1, obj2, obj4) // good method
// console.log(obj3);

const users = [ // array of objects
    {
        id : 1 ,
        email : "tej@gmail.com"
    },
    {
        id : 2 ,
        email : "pat@gmail.com"
    },
    {
        id : 3 ,
        email : "sam@gmail.com"
    },
]

// console.log(users);
// console.log(users[1].email);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// all 3 return formats are array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename : "js in hindi" ,
    price : "999" ,
    courseInstructor : "tejas"
}

const {courseInstructor : instructor} = course //  object destructuring
console.log(course.courseInstructor);
console.log(instructor);
// same output -> tejas

// {
//     "name" : "tejas" ,
//     "coursename" : "js in hindi" ,
//     "price" : "free"
// }

[
    {},
    {},
    {}
]