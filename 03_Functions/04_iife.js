// Immediately Invoked Function Expression(IIFE)


// # IIFE is used to avoid the global pollution
// Named IIFE
(function chai(){
    console.log("DB CONNECTED");
})();

( (name) => {
    console.log(`DB CONNECTED TWO`);
    console.log(`Hello ${name}`);
})("Satish");

