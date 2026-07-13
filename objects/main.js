const person = {
  firstname: "Modther",
  age: 21
};

const property = "firstname";

console.log(person[property]); // Modther
console.log(person.property);  // undefined

// JavaScript objects are collections of named values10 . An object can be defined using curly brackets ({ and }). 
// Inside the brackets, there is a list of name: value pairs, separated by commas (,). 
// For example: var person = { firstname: "John", lastname: "Smith", age: 50, eyecolor: "blue" }; 
// The above expression defines an object named person. This object is composed of four named values, separated by commas. 
// Each named value is composed of a name (such as firstname) and a value (such as "John"), separated by a colon (:). The named values are also called object properties. 
// For example, the above object has four properties, named firstname, lastname, age, and eyecolor. The property values can be of any data type, including primitive data types (as in the above example, "John", "Smith", 50, "blue"), but also arrays and objects. 
// Property values can also be functions, in which case they are referred to as methods (Section 3.8). 
// Objects are fundamental to JavaScript, and almost everything we work with in JavaScript is an object. 
// The rationale of an object is to bind related data and/or functionality into a single collection. 
// The collection usually consists of several variables and functions, which are called properties and methods when they are inside objects, respectively.
// Dorman, Michael. Introduction to Web Mapping, CRC Press LLC, 2020. ProQuest Ebook Central, http://ebookcentral.proquest.com/lib/univ-people-ebooks/detail.action?docID=6029016.
// Created from univ-people-ebooks on 2026-07-13 23:28:04.

// Object properties can be accessed using either of the following two methods: The dot notation (.) The bracket notation ([) In both cases, we need to specify the object name and the property/method name. 
// For example, getting the person properties using the dot notation looks like this: person.firstname; 
// Returns "John" person.age; 
// Returns 50 person.firstname + " is " + person.age + " years old."; 
// What do you think will be returned by the third expression in the above code section? Create the persons object in the console and run the expression to check your answer. 
// The same can be accomplished using the bracket notation, as follows: person["firstname"]; 
// Returns "John" person["age"]; // Returns 50 person["firstname"] + " is " + person["age"] + " years old."; When using the bracket notation, property names are specified as strings, in quotes. This means the dot notation is shorter to type, but the bracket notation is useful when the property name is specified with a variable
// Dorman, Michael. Introduction to Web Mapping, CRC Press LLC, 2020. ProQuest Ebook Central, http://ebookcentral.proquest.com/lib/univ-people-ebooks/detail.action?docID=6029016.
// Created from univ-people-ebooks on 2026-07-13 23:30:09.