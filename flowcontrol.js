// Iterative for loop syntax
// In addition to the standard for loop syntax shown above, there is a special syntax to iterate
// over elements of arrays or objects. In this iterative syntax, instead having three statements,
// we define the loop with just one statement:
// for(var i in object) {
// // Code block to be executed
// }
// where i is a variable name (of our choice) and object is the object which we iterate over.
// In each iteration, i is set to another object element name. 
// In case object is an array, i gets the array index values: "0", "1", "2", and so on. 
// In case object is an object, i gets the property names. For example:

/* var obj = { a: 12, b: 13, c: 14 };
var ara = ['a', 'v', 'c']
for (var i in ara) {
    console.log(i + " " + ara[i]);
} */
