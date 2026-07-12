// function sayHiBye(firstName, lastName) {

//   // helper nested function to use below
//   function getFullName() {
//     return firstName + " " + lastName;
//   }

//   console.log( "Hello, " + getFullName() );
//   console.log( "Bye, " + getFullName() );

// }

// sayHiBye("moodther", "abdalhag")

// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++;
//   };
// }

// let counter = makeCounter();

// console.log( counter() ); // 0
// console.log( counter() ); // 1
// console.log( counter() ); // 2

/* let phrase;
console.log(phrase);
phrase = "hello";
console.log(phrase); 
phrase = "bye"; */
/* Rectangles src="lexical-environment-global.svg" on the right-hand side demonstrate how the global Lexical Environment changes during the execution:

1- When the script starts, the Lexical Environment is pre-populated with all declared variables.
Initially, they are in the “Uninitialized” state. That’s a special internal state, it means that the engine knows about the variable, but it cannot be referenced until it has been declared with let. It’s almost the same as if the variable didn’t exist.
2- Then let phrase definition appears. There’s no assignment yet, so its value is undefined. We can use the variable from this point forward.
3- phrase is assigned a value.
4- phrase changes the value. */