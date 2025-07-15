"hello"+"world"; // "helloworld"
"hello".length; // 5
"hello".toUpperCase(); // "HELLO"
"hello".toLowerCase(); // "hello"
"hello".charAt(0); // "h"
"hello".indexOf("e"); // 1
"hello".includes("lo"); // true
"hello".slice(1, 4); // "ell"
"hello".replace("l", "p"); // "heplo"

"hello".split(""); // ["h", "e", "l", "l", "o"]
"hello".trim(); // "hello" (removes whitespace from both ends)
"hello".startsWith("he"); // true
"hello".endsWith("lo"); // true
"hello".repeat(3); // "hellohellohello"
"hello".concat(" world"); // "hello world"
"hello".match(/l/g); // ["l", "l"] (finds all occurrences of "l")
"hello".search("e"); // 1 (finds the index of the first occurrence
"hello".localeCompare("world"); // -1 (compares two strings, returns -1 if "hello" comes before "world")

const name = "Hitesh Choudhary";
console.log(` Hello my name is ${name} `); // Template literals for string interpolation

const gameName = new String("Call of Duty");
console.log(gameName); // String object, not a primitive string

console.log(gameName[0]); // "C" (accessing the first character of the string object)
console.log(gameName._proto__); // String.prototype (shows the prototype of the string object)
console.log(gameName.length); // 13 (length of the string object)

const newString = gameName.slice(-8, 4); 
console.log(newString); // "Call" (slicing the string object, note that negative indices count from the end)

const url = "https://www.youtube.com/@hitesh%20choudhary";

console.log(url.replace("%20","-"))//it does not changes permanently
console.log(url)