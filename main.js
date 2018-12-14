//set array for overall equation
let equation = [];

//push numbers to equation array and display
let numbers = document.querySelectorAll(".number");
numbers.forEach(function(number){
    number.addEventListener('click', function(){
        equation.push(number.dataset.num);
        const display = document.getElementById("display");
        display.innerText = `${number.dataset.num}`;
    })
})
console.log(equation);