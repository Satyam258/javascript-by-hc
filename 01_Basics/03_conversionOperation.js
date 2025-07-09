let score1 = 30


console.log(typeof score1); // number

let score = "30";
console.log(typeof score); // string

let newScore = Number(score);
console.log(typeof newScore); // number

let num =  "33abc";
let newNum = Number(num);
console.log(newNum); // NaN

// "33" => 33
// "33abc" => NaN
//true => 1
// false => 0
//null => 0
// undefined => NaN

let isLoggedIn = 1;
let bool = Boolean(isLoggedIn);
console.log(bool); // true

// 1=> true
// 0 => false
// "abc" => true
// "" => false


// during conversion use Number, String, Boolean(N,S,B are capitalized )

let someNumber = 33;
let StringNumber = String(someNumber);
console.log(StringNumber); // "33"

let someString = true;
let BooleanString = String(someString); // "true"
console.log(BooleanString); // "true"


// **************OPerations ****************

let value = 3
let negValue = -value;
console.log(negValue); // -3

let str1 = "hello";
let str2 = "world";
let str3 = str1 + " " + str2;
console.log(str3); // "hello world"

console.log(str1 + 3); // "hello3" (string concatenation)
console.log(3 + str1); // "3hello" (string concatenation)   
console.log(str1 + 3 + 4); // "hello34" (string concatenation)
console.log(3 + 4 + str1); // "7hello" (number addition and string concatenation)

console.log(+true); // 1 (boolean to number)
console.log(+false); // 0 (boolean to number)
console.log(+null); // 0 (null to number)
console.log(+undefined); // NaN (undefined to number)
console.log(+str1); // NaN (string to number, not a valid number)       
console.log(+""); // 0 (empty string to number)

//+ converts the value to a number

let num1 = num2 = num3 = 10;
console.log(num1, num2, num3); // 10 10 10