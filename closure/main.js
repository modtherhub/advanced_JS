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


/* scope */
// function test() {
//   if (true) {
//     var x = 10; // var does not recognize Block Scope.
//     let y = 20; // let block scope 
//   }
// test();

//   console.log(x); // 10
// //   console.log(y); // ReferenceError
// }
// | word    | Scope                |
// |---------|----------------------|
// | `var`   | Function || Global   |
// | `let`   | Block                |
// | `const` | Block                |

// Key Differences Table 
// Feature             | var                      | let                        | const
// Scope               | Function / Global        | Block ({})                 | Block ({}) 
// Can Be Reassigned?  | Yes                      | Yes                        | No
// Can Be Redeclared?  |  Yes                     | No                         | No
// Hoisting Behavior   | Initialized as undefined | Hoisted, but uninitialized | Hoisted, but uninitializedRequired 
// Initial Value?      | No                       |   No                       | Yes

// During the Creation Phase, JavaScript allocates memory for variables.
// var variables are created and immediately initialized with undefined.
// undefined is a valid primitive value in JavaScript.
// Because the variable is already initialized, accessing it before its declaration does not throw an error.
// Instead, JavaScript returns undefined.

// During the Creation Phase, let and const variables are also created.
// However, they are not initialized immediately.
// They remain in the Temporal Dead Zone (TDZ) until execution reaches their declaration.
// Accessing them before initialization throws a ReferenceError.
// The error occurs not because the variable doesn't exist, but because it exists and is not yet initialized.

// Key takeaway
// var → Created + Initialized (undefined) → Accessible
// let / const → Created + Not Initialized (TDZ) → Not Accessible


/* inner
   │
   ▼
outer   ← Outer
   │
   ▼
Global  ← Outer of outer
   │
   ▼
null */
// If a variable is not found anywhere, that’s an error in strict mode (without use strict, an assignment to a non-existing variable creates a new global variable, for compatibility with old code).

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())

// resources 
// https://javascript.info/closure#lexical-environment