const userName= "John Doe";
let accountBalance = 1000;
var isLoggedIn = true;

name = "lily"; // This will throw an error because 'name' is not defined

console.log(`User Name: ${userName},
    Account Balance: $${accountBalance},
     Is Logged In: ${isLoggedIn}`);

     //generally var is not used in modern JavaScript, prefer let and const, beacause of block scope