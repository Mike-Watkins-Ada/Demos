const readline = require("readline-sync")

let randNum = Math.floor(Math.random()*100+1);
console.log("Random number picked: " + randNum)
let count = 0; 
let inputNum = "";

do {
    inputNum = readline.question("Please enter a number between 1-100: ")
    count++;

    // it will run this code is the numbers are not the same
    if (inputNum > randNum) {
        console.log("value is too high")
    }
    if (inputNum < randNum) {
        console.log("value is too low")
    }

} while (randNum != inputNum)
console.log("Congratulations, Well Done, you did it in " + count)