// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magician = ['harry potter', 'hermione granger', 'ron weasley', 'albus dumbledore'];
function show_magecians(Magicians) {
    Magicians.forEach(function (element) {
        console.log(element);
    });
}
show_magecians(magician);
