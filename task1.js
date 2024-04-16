
// Use a loop to print out the 7 times table up to 12 x 7 
// (extension: let the user choose which times table they 
// would like to see.)

const readline = require("readline-sync");
let table = readline.question("Provide value: ");

//let table = userValue;
for(let i = 1; i <= 12; i++) {
    let value = i * table;
    console.log(`${i} x ${table} = ${value}`)
}


// const readline = require("readline-sync");

// let userValue = readline.question("Provide value: ");


// console.log("Hi, you entered " + userValue);
// console.log(`Hi, you entered ${userValue}`);

