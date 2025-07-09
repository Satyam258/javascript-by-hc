// console.log(2>1); // false
// console.log(2<1); // true
// console.log(2>=1); // true
// console.log(2<=1); // false
// console.log(2==1); // false
// console.log(2!=1); // true

console.log("2" > 1); // true (string "2" is converted to number 2)
console.log("02" >1); // true (string "02" is converted to number 2)

console.log(null > 0); // false (null is converted to 0)
console.log(null < 0); // false (null is converted to 0)
console.log(null == 0); // false (null is not equal to 0)
console.log(null >= 0); // true (null is converted to 0)
console.log(null <= 0); // true (null is converted to 0)

console.log(undefined == 0); // false (undefined is not equal to 0 or any number)
console.log(undefined > 0); // false (undefined is not greater than 0)
console.log(undefined < 0); // false (undefined is not less than 0)

// === strict equality
console.log(2 === 2); // true (both are numbers)
console.log(2 === "2"); // false (number and string are not strictly equal)