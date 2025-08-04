// Question 1

var cityname = prompt("Enter your city");

if (cityname === "Karachi"  );{
alert("Welcome to the city of lights!");
}

// Question 2

var Gender = prompt("Enter your gender (male/female): ");

if (Gender === "male") {
    alert("Good Morning Sir!");
} else if (Gender === "female") {
    alert("Good Morning Ma'am!");
} else {
    alert("Good Morning!");
}



// Question 3 

var signal = prompt("Enter trrafic color (red/yellow/green):");

if (signal === "red") {
    alert("Must Stop");
}
else if (signal === "yellow") {
    alert("ready to Move");
} else if (signal === "green") {
    alert("Move Now");
}  

// Question 4


var fuel = prompt (" fuel in liters")
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}









//  Question 5


var a = 4;
if (++a === 5) {
    alert("Condition is true");
}

var b = 82;
if (b++ === 83) {
    alert("Condition is true");
}

var c = 12;
if (c++ === 13) {
    alert("Conditionm1 is true");
}

if (c === 13) {
    alert("Condition 2 is true");
}

if (++c <14) {
    alert("Condition 3 is true");
}
if (c === 14 ) {
    alert("Condition 3 is true");
}


if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}




// Question 7

var secretNumber = 5;  
var userGuess = prompt("Guess the secret number (1-10):");

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Try again!");
}






// Question 8 

var Number = prompt ("enter a num");
if (Number % 3 === 0 ) {
    alert(Number +" is divisible by 3")
}

// Question 9

var number = prompt("Enter a number ");

if (number % 2 === 0) {
    alert(number + " is an even number.");
} else {
    alert(number + " is an odd number.");
}


// Question 10

var temperature = prompt("Enter the temperature:");

if (temperature > 40) {
    alert("too hot to handle ");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It’s very cold!");
}

// Question 11

var number1 = prompt("Enter first number:");
var number2 = prompt("Enter second number:");
var operator = prompt("Enter operation (+, -, *, /, %):");
var result;

if (operator === "+") {
    result = number1 + number2;
} else if (operator === "-") {
    result = number1 - number2;
} else if (operator === "*") {
    result = number1 * number2;
} else if (operator === "/") {
    result = number1 / number2;
} else if (operator === "%") {
    result = number1 % number2;
} else {
    result = "Invalid operation!";
}

alert("Result: " + result);
