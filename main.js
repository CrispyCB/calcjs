//declares global let variables.
let a = "";
let b = "";
let operation;

//declares display assignment.
const display = document.getElementById("display");

// declares constant operation functions.
const multiply = (a,b) => {
    a = a * b;
    b = "";
    display.innerText = a;
    return a;
}
const divide = (a,b) => {
    a = a / b;
    b = "";
    display.innerText = a;
    return a;
}
const add = (a,b) => {
    a = a + b;
    b = "";
    display.innerText = a;
    return a;
}
const subtract = (a,b) => {
    a = a - b;
    b = "";
    display.innerText = a;
    return a;
}

//declares operation button assignments.
const multiplybtn = document.getElementById("multiply");
const dividebtn = document.getElementById("divide");
const addbtn = document.getElementById("add");
const subtractbtn = document.getElementById("subtract");
const equals = document.getElementById("equals");
const clearEntry = document.getElementById("clear-entry");
const clearAll = document.getElementById("clear-all");

multiplybtn.addEventListener('click', function(){
    operation = multiply;
})

dividebtn.addEventListener('click', function(){
    operation = divide;
})

addbtn.addEventListener('click', function(){
    operation = add;
})

subtractbtn.addEventListener('click', function(){
    operation = subtract;
})

equals.addEventListener('click', function() {
    return operation(a,b);
})

clearEntry.addEventListener('click', function(){
    if (a != ""){
        a = "";
    }
    else if (b != ""){
        b = "";
    }
})
clearAll.addEventListener('click', function(){
    return a = "", b = "";
})

//declares number button assignments.
let numbers = document.querySelectorAll(".number");
numbers.forEach(number => number.addEventListener('click', function(){
    display.innerText = number.value;
    if (a === ""){
        a = number.value;
        console.log(a);
        return a;
    }
    else if (b === ""){
       b = number.value;
       console.log(b);
       return b;
    }
}))
