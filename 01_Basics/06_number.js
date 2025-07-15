const score = 400 

console.log(score); // 400 (primitive number)

const balance = new Number(100)// using Number constructor, not recommended
console.log(balance); // Number {100} (object wrapper around the primitive number)

console.log(balance.toString()); // "100" (converts the number object to a string)
console.log(balance.valueOf()); // 100 (returns the primitive value of the number object)

console.log(balance.toFixed(2)); // "100.00" (formats the number to 2 decimal places)

const otherNumber = 100.123456789;
console.log(otherNumber.toPrecision(5)); // "100.12" (formats the number
// to a specified precision, in this case 5 significant digits)
console.log(otherNumber.toPrecision(3)); // "100" (formats the number to 3 significant digits)

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // "1,000,000" (formats the number with commas as thousands separators based on locale)

console.log(hundreds.toLocaleString('en-IN'));
// "10,00,000" (formats the number with Indian numbering system)



// ++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-10)); // 10 (absolute value)
console.log(Math.round(4.2)); // 4 (rounds to nearest integer)
console.log(Math.ceil(4.2)); // 5 (rounds up to nearest integer)
console.log(Math.floor(4.8)); // 4 (rounds down to nearest integer)
console.log(Math.max(1, 2, 3)); // 3 (maximum value)
console.log(Math.min(1, 2, 3)); // 1 (minimum value)
console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * 10 +1); // random number between 1 and 10

const min = 10;
const max = 20;
const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min; // random number between 10 and 20
console.log(randomInRange);