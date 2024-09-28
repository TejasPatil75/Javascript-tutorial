const accountId = 166474
let accountEmail = "tejas@google.com"
var accountPassword = "12345"
accountCity = "Pune" ;
let accountState ;

// accountId = 2 // not allowed

accountEmail = "patil@google.com"
accountPassword = "678910"
accountCity = "Mumbai"

console.log(accountId);

// prefer not use var because of issue in block scope and functional scope

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])
