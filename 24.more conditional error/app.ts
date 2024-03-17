import test from "node:test";

//Define variable.
let apple:string='apple';
let uppercaseAPPLE:string='APPLE';
let ten = 10;
let twenty=20;
let fruits:string[]=['apple','orange','mango'];

//test for equality and inquality with string
console.log("Is  apple is equal to apple");
console.log(apple=='apple');

console.log("Is  apple is  not equal to apple");
console.log(apple!='apple');

//test using lowercase function
console.log("\nIs APPLE is equal to apple after converting to lowercase ");
console.log(uppercaseAPPLE.toLowerCase()=="apple");

console.log("\nIs APPLE is not equal to apple after converting to lowercase ");
console.log(uppercaseAPPLE.toLowerCase()!="apple");

//numerical tests
console.log("\nIs ten is equal to twenty?");
console.log(ten==twenty);

//not equal test
console.log("\nIs ten is not equal to twenty?");
console.log(ten!=twenty);

//greater then
console.log("\nten is greater then 0?");
console.log(ten > 0);

//less then
console.log("\ntwenty is less then ten ?");
console.log(twenty < 0);


//greater then or equal to
console.log("\nIs 10 is greater  then or equal to 5?");
console.log(ten >= 5);

//less then or equal to
console.log("\nIs twentny is   less than or equal to 10");
console.log(20 <= 10);

//test  usign "and" & "or" operators.

//using && operators
console.log("twenty is not equal to 10 and twenty is greater then 10");
console.log(twenty != 10 && twenty > 10);

console.log("twenty is not equal to 10 and twenty is greater then 30");
console.log(twenty != 10 && twenty > 30);

//using || (OR) operators
console.log("\n 20 is greater then 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n 20 is greater then 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 != 20);

//test whether an item is include in array.
console.log("\nIs orange is include in my array");
console.log(fruits.includes("orange"));

//not include
console.log("\nIs orange is not  include in my array");
console.log(fruits.includes("orange"));

















