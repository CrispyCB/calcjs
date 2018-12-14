//set array for overall equation
let equation = [];

//push numbers to equation array and display
let numbers = document.getElementsByClassName("number");
for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function(){
        equation.push(numbers.dataset.num);
        const display = this.document.getElementById("display");
        display.innerText = `${numbers.dataset.num}`;
    })
};
console.log(equation);