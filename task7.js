console.log ( Math.max(10, 20, 15, 1, 20))

function minMJ(num1, num2) {

    if(num1 < num2) {
        console.log ("got here")
        return num1, num2
    }
    return num2
}

let v, i = minMJ(100, 200)
console.log(v)