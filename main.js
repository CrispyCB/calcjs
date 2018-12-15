//declares global let variables and constant operation functions.
let a;
let b;
let operation;

const multiply = (a,b) => {return a = a * b, b = "";}
const divide = (a,b) => {return a = a / b, b = "";}
const add = (a,b) => {return a = a + b, b= "";}
const subtract = (a,b) => {return a = a - b, b = "";}

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
    return operation;
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
numbers.addEventListener('click', function(){
    const display = document.getElementById("display");
    display.innerText = numbers.dataset.num;
    if (a = ""){
        a = numbers.dataset.num;
    }
    else if (b = ""){
        b = numbers.dataset.num;
    }
})

