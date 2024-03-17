// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//is printed for the appropriate color alien • Write three versions of this program, making sure each message 
let alein_color:string='green';

// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.

if (alein_color === 'green') {
    console.log('player earned  5 points');
}else if(alein_color === 'yellow'){
    console.log('player earned 10 points')
}else if (alein_color === 'red'){
    console.log('player earned 15 points')
}else{
    console.log('please select the color')
}

//version 2 of the program
alein_color='yellow';

if (alein_color === 'green') {
    console.log('player earned  5 points');
}else if(alein_color === 'yellow'){
    console.log('player earned 10 points')
}else if (alein_color === 'red'){
    console.log('player earned 15 points')
}else{
    console.log('please select the color')
}
 
//version 3 of the program
alein_color='red';

if (alein_color === 'green') {
    console.log('player earned  5 points');
}else if(alein_color === 'yellow'){
    console.log('player earned 10 points')
}else if (alein_color === 'red'){
    console.log('player earned 15 points')
}else{
    console.log('please select the color')
}