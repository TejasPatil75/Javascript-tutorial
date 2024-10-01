// for

for(let i=0 ; i<=10 ; i++)
{
    if(i == 5)
    {
        // console.log("5 is best number");
    }
    // console.log(i);
}

for(let i=1 ; i<=10 ; i++)
{
    // console.log(`Outer loop value : ${i}`);
    for(let j=1 ; j<=10 ; j++)
    {
        // console.log(`Inner loop value ${j} and outer loop ${i}`)
        // console.log(`i * j = ${i*j}`);
    }
}

let myArr = ["flash" , "batman", "superman"]
// console.log(myArr.length);

for(let i = 0 ; i < myArr.length ; i++)
{
    // console.log(myArr[i]);
}

// break and continue

// for(let i=1 ; i<=20 ; i++)
// {
//     if(i == 5)
//     {
//         console.log(`Detected 5`);
//         break ;
//     }
//     console.log(`Value of i is ${i}`);
// }

for(let i=1 ; i<=20 ; i++)
{
    if(i == 5)
    {
        console.log(`Detected 5`);
        continue ;
    }
    console.log(`Value of i is ${i}`);
}
