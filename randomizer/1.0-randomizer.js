/* 
 * Randomizer: 
 * Generate a random integer between 1 and 100 
 * Alert it to the screen
 * Log it to the console
 */
 
// var creates a global variable called randomizer equal to 0
var randomint = 0; 
// Math.random generates a random value between 0 and 1 (but not 1)
randomint = Math.random();
// multiply the result to the range we want
randomint = Math.random()*100;
// Math.floor removes everything to the right of the decimal point
randomint = Math.floor(Math.random()*100);
// Add 1 to push range from 0-99 to 1-100
randomint = Math.floor(Math.random()*100)+1;
// alert creates a screen pop-up
alert(randomint);
// console.log writes to the console
console.log(randomint);
