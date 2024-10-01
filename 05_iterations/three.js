// for of (loop) // genrally used for arrays

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for(const num of arr)
{
    // console.log(num); 
}

const greetings = "Hello world!"
for(const greet of greetings)
{
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "Unites States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map); 

for(const [key, Value] of map)
{
    // console.log(key, ':-', Value);
}

const myObject = {
    game1 : 'NFS' ,
    game2 : 'Spiderman'
}

// for(const [key,Value] of myObject)
// {
//     console.log(key, ':-', Value);
// } 
// output -> not iterable
