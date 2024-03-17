"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name
let magician = [
    "harry potter",
    "hermione granger",
    "ron weasley",
    "albus dumbledore",
];
function copyarray(arr) {
    return [...arr];
}
function make_great(magicianarray) {
    for (let i = 0; i < magicianarray.length; i++) {
        magicianarray[i] = "the great" + magicianarray[i];
    }
}
function show_magecians(Magicians) {
    Magicians.forEach((element) => {
        console.log(element);
    });
}
const copymagicianarray = copyarray(magician);
make_great(copymagicianarray);
console.log("this is my original array");
show_magecians(magician);
console.log("\n\nthis is modified copy array original array");
show_magecians(copymagicianarray);
