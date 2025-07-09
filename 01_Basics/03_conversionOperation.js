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