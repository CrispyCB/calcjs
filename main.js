//declares global let variable and constant operation functions.
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



