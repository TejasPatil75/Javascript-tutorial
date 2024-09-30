// Immediately Invoked Function Expressions (IIFE)

// eg : used in some system

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})() ; // this -> ; is necessary to terminate the iife 
// while executing more than one iife

( (name) => {   // using arrow func
    console.log(`DB CONNECTED TWO ${name}`);
    
})("tejas")