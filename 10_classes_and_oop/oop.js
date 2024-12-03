const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`Username: ${this.username}`) ;
        console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

function User(username, loginCount, isLoggenIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggenIn = isLoggenIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
}

const userOne = new User("tejas",12,true)
const userTwo = new User("ChaiAurCode",11,false)
// console.log(userOne.greeting())
// console.log(userTwo.greeting())

console.log(userOne.constructor) // gives reference to its own
