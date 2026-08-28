// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`); 
}) (); // DB CONNECTED

// chai();
// if you want to invoke or replace calling "chai()" 
// then use ()

// ()() 1st is definiton, 2nd excution call

// why we use IIFE?
// to secure from 'global polution'

// error coz not having ;, to ensure prev. func. 
// named IIFE
( function aurcode(){
    console.log(`DB CONNECTED TWO`); // DB CONNTECTED TWO
}) ();

// arrow func.
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) (`aman`)