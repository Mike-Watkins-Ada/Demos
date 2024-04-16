console.log("Task 4")

//Use a loop to print the numbers between 1 and 1000 that are divisible by 3 and 4.
for (let i = 1; i <= 15; i++) {
    let calc = i%3;
    if(calc == 0) {
        console.log(`${i} is divisable by 3 = ${calc}`)
    }

    calc = i%4;
    if(calc == 0) {
        console.log(`${i} is divisable by 4 = ${calc}`)
    }

}