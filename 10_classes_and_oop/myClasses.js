// After ES6 class concept was introduced in js

class User{
    constructor(username , email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encrptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encrptPassword())
console.log(chai.changeUsername())


// behind the scenes

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encrptPassword = function(){
    return `${this.password}xyz`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encrptPassword())
console.log(tea.changeUsername())