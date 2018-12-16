//declares global let variables.
let a = "";
let b = "";
let isFirstNumber = true; //checks if we're populating 'a'. if false, populates 'b'.
let operation;

//declares display assignment.
const display = document.getElementById("display");

// declares constant operation functions.
const multiply = (a,b) => {
    a = Number(a) * Number(b);
    b = "";
    display.innerText = a;
    return a;
}
const divide = (a,b) => {
    a = Number(a) / Number(b);
    b = "";
    display.innerText = a;
    return a;
}
const add = (a,b) => {
    a = Number(a) + Number(b);
    b = "";
    display.innerText = a;
    return a;
}
const subtract = (a,b) => {
    a = Number(a) - Number(b);
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
    isFirstNumber = false;
    display.innerText = "";
})

dividebtn.addEventListener('click', function(){
    operation = divide;
    isFirstNumber = false;
    display.innerText = "";
})

addbtn.addEventListener('click', function(){
    operation = add;
    isFirstNumber = false;
    display.innerText = "";
})

subtractbtn.addEventListener('click', function(){
    operation = subtract;
    isFirstNumber = false;
    display.innerText = "";
})

equals.addEventListener('click', function() {
    isFirstNumber = true;
    return operation(Number(a),Number(b));
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
numbers.forEach(number => number.addEventListener('click', function(event){ //Find out what was clicked
    display.innerText += event.target.value; // appends to string
    if (isFirstNumber){
        a += event.target.value;
        }
    else {
       b += event.target.value;
    }
}))