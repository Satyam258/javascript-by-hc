//primitive data types
// string, number, boolean, null, undefined, symbol,bigint

const score =  100;
const scoreValue = 100.5;


const isLoggedIn = true;
const isLoggedOut = null; // null is used to represent an intentional absence of any object value

const id = Symbol("123"); // Symbol is a unique and immutable data type, often used as object property keys
const anotherId = Symbol("123"); // even if the description is the same, each Symbol is unique


// (reference )non-primitive data types
// object, array, function

const user = {
  name: "John",
  age: 30,
}

const heroes = ["Batman", "Superman", "Wonderwoman"]; // array is a special type of object in JavaScript

//**********************************************         */

//stack (Primitive data types), Heap (Non-primitive data types)


let myYoutubeName = "chain of thought"; // string is a primitive data type
let anothername = myYoutubeName;
anothername = "Hitesh Choudhary"; // this will not change the original value of myYoutubeName
console.log(myYoutubeName); // "chain of thought"   
console.log(anothername); // "Hitesh Choudhary"