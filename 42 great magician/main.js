"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified
let magician = ['harry potter', 'hermione granger', 'ron weasley', 'albus dumbledore'];
function make_great(magicianarray) {
    for (let i = 0; i < magicianarray.length; i++) {
        magician[i] = 'the great' + magicianarray[i];
    }
}
function show_magecians(Magicians) {
    Magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magecians(magician);
