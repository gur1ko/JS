/* // strings 
const myVariable = "Mathematics";



// The length property 
console.log("Every Good boy".length);

// string methods

console.log(myVariable.charAt(6));

// string methods

console.log(myVariable.indexOf("at"));


// string methods

console.log(myVariable.lastIndexOf("ath"));


// string methods

console.log(myVariable.slice(5, 8));   // returns mat, because the first 8 and last 5 letters interect at mat (its like the unification)

// string methods */

/* 
console.log(myVariable.toLowerCase()); //returns the string with lowercase

console.log(myVariable.toUpperCase()); // returns in upper case



console.log(myVariable.toUpperCase()); */




///////////////////////////




/* // NUMBERS 

// AN INTEGER IS A WHOLE NUMBER.

const myNumber = 23;


// A NUMBER WITH A DECIMAL POINT IS A FLOAT WHICH REFERENCES THE "THE FLOATING POINT"

const myFloat = 23.01;

const myString = "23.02abc";

console.log(myNumber);
 

console.log(myNumber === myString);


console.log(Number(myString) === true); // we transformed string type of number into number, and if before it was impossible to add numbers to string type of numbers now it is.

// zero equals to false in JS


//NUMBER METHODS

// The Number.isInteger() method determines whether the passed value is an integer.
 
console.log(Number.isInteger(myNumber)); // true

// the Number.parseFloat() method parses an argument and returns a floating point number. if a number cannot be parsed from the argument, it returns NaN.


console.log(Number.parseFloat(myString));


// the toFixed() method formats a number according to how many decimal points you provide as the parameter.


console.log(myFloat.toFixed(3));


// the Number.parseInt() method parses a string argument and returns integer.

//the toString() method returns a string representing the number.


console.log(typeof Number.parseFloat(myString));



// Chaining = Using several methods chained together.

console.log(Number.parseFloat("2.36adsff").toFixed(2).toString());



// NaN is an acronym for Not a Number


// The Number.isNaN() method determines whether the passed value is NaN AND its type is Number.



console.log(Number.isNaN("Gurami"));
 */





//////////////////////////////



/* 
// MATH METHODS AND PROPERTIES

console.log(Math.PI);

console.log(Math.trunc(Math.PI)); // .trunc removes all the decimals from the pie.

console.log(Math.round(Math.PI)); // .round method rounds the number to the nearest integer (difference between .trunc and .round is that trunc just removes all the decimal numbers)


console.log(Math.ceil(Math.PI)); // .ceil method always rounds up the number no matter what.

console.log(Math.floor(Math.PI)); // . floor method always rounds down the number no matter its decimal.



console.log(Math.pow(2, 4)); // .pow method powersup the number. in the given example we have 2 in power of 4.


console.log(Math.min(2, 0.5, 9)); // .min choooses the smallest value from the given numbers


console.log(Math.max(1, 2, 5)); // .max method does the same work for the biggest number.


console.log(Math.random()); //gives us the random number from 0 to 1

console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1); */
 

// with the given "equation" we generate random number from 1 to 10


// we should choose Math.floor() method instead of Math.ceil() method because Math.random() returns a range from 0 to 1 that includes 0 but not 1. math.ceil has a chance of resulting a zero.



//////////////////////////////////////





// CODE CHALLENGE

// make a program that randomly selects one latter from the name

/* const myName = "gurami";


console.log(myName.charAt(Math.floor((Math.random() * (myName.length)))));
console.log(myName.charAt(Math.floor((Math.random() * (myName.length)))));
console.log(myName.charAt(Math.floor((Math.random() * (myName.length)))));
console.log(myName.charAt(Math.floor((Math.random() * (myName.length)))));
console.log(myName.charAt(Math.floor((Math.random() * (myName.length)))));
 */



/////////////////////////////



// Conditionals: If Statementsn


/* if (condition) {
    //run some code here
} else {
    // run some different code here
} */



/* let customerIsBanned = true;
let soup = "Chicken noodle soup";
let crackers = true;
let reply;
if (customerIsBanned) {
    reply = "No soup for you!"
} else if (soup && crackers) {
    reply = 'here is your order of ${soup}'
}
if (soup) {
    reply = 'here is your order of ${soup}';
} else {
    reply = 'sorry, we are out of soup'
}
console.log(reply); */


/* let testScore = ;
let collegeStudent = true;
let grade;


if (testScore >= 90) {
    grade = "A"
} else if (testScore >= 80) { 
    grade = "B"  
}
 else if (testScore >= 70) { 
    grade = "C"  
}
 else if (testScore >= 60) { 
    grade = "D"  
} else {
    if (collegeStudent) {
        grade = "U"
    } else {
        grade = "F"
    }
}
console.log(grade);
 */



////// Decision tree!

/* if (playerOne === computer) {
    //tie game
} else if (playerOne === "rock"){
    if(computer === "paper"){
    //computer wins
} else {
    //playerOne wins
}
} else if (playerOne === "paper"){
    if(computer === "scissors"){
    //computer wins
} else {
    //playerOne wins
}
} else if (playerOne === "scissors"){
    if(computer === "rock"){
    //computer wins
} else {
    //playerOne wins
}   
 */
////////////////////////////

/* let playerOne = "scissors";
let computer = "scissors";

switch (playerOne) {
    case computer:
        console.log("Tie game!");
        break;
        case "rock":
            if (computer === "paper") {
                console.log("computer wins!");
            } else {
                console.log("playerOne wins!");
            }
            break;
        case "paper":
            if (computer === "scissors") {
                console.log("computer wins!");
            } else {
                console.log("playerOne wins!");
            }
            break;
            default:
            if (computer === "rock") {
                console.log("computer wins!");
            } else {
                console.log("playerOne wins!");
            }

} */










////////////////////////////


//Operators 

//syntax
//condition ? ifTrue : ifFalse;


/* let soup = "Chicken Noodle Soup";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned ? "Sorry, no soup today for you!"
: soup 
? 'Yes, we have $(soup) today.'
:"sorry, no soup today.";
console.log(soupAccess);

 */


/* 
let testScore = 40;
let myGrade = testScore > 89 ? "A"
: testScore > 79 ? "B"
: testScore > 69 ? "C"
: testScore > 59 ? "D"
: "F";
console.log(`My test grade is a ${myGrade}.`)
 */



/* 
let playerOne = "paper";
let computer = "rock";
let result = playerOne === computer ? "tie game!"
: playerOne === "rock" && computer === "paper"
? "Computer wins!"
: playerOne === "paper" && computer === "scissors"
? "Computer wins!"
: playerOne === "scissors" && computer === "rock"
? "Computer wins!"
: "playerOne wins!";
console.log(result); */


///////////////////////////////////////
//User input 


/* alert("Hello world!") */

/* let myBoolean = confirm("Ok===True\nCancel === False");
console.log(myBoolean);
 */


/* let name = prompt("Please enter your name.");
if (name) {
    console.log(name.length);
    console.log(name.trim().length)
    console.log(name.trim())
console.log(name);
} else {
    console.log("you didn't enter your name");
} */




/////////////////////


// My first interactive game 

/* let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame) {
    //play
    let playerChoice = prompt("Please enter rock, paper, or scissors.");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock"
                : computerChoice === 2 ? "paper"
                : "scissors";
                let result = 
                playerOne === computer
                ? "Tie game!"
                : playerOne === "rock" && computer === "paper"
                ? `playerOne: ${playerOne}\nComputer: ${computer}
                \nComputer wins!`
                : playerOne === "paper" && computer === "scissors"
                ? `playerOne: ${playerOne}\nComputer: ${computer}
                \nComputer wins!`
                : playerOne === "scissors" && computer === "rock"
                ? `playerOne: ${playerOne}\nComputer: ${computer}
                \nComputer wins!`
                : `playerOne: ${playerOne}\nComputer: ${computer}
                /nPlayerOne wins!` ;
                alert(result);
                let playAgain = confirm("Play Again?");
                playAgain ? location.reload() : alert("Ok thanks for playing.")
    } else {
        alert("you didn't enter rock, paper, or scissors.");
    }
    } else {
        alert("I guess you changed your mind, maybe next time.");
    }
} else {
    alert("Ok, maybe next time."); */
    




//////////////////////////////


// loops 

/* let myNumber = 0;
do {
    console.log(myNumber);
} while (myNumber < 50);
 */
// don't create an endless loop 



/* let name = "Gurami"
for (let i = 0; i < name.length; i++)  {
    console.log(name.charAt(i));
}
 */

/* 
let myName = "Gurami";
let counter = 0;
let myLetter;
while (true) {
myLetter = name[counter];
console.log(myLetter);
if (myLetter === "r") break;
counter++;
} */











////////////////////////////////////



// functions




// function declaration syntax;

/* function sum(num1, num2) {
    if (num2 === undefined) {
    return num1 + num1;
 }
    return num1 + num2;
}

console.log(sum(5, 10));
 */



/* const getUserNameFromEmail = (email) => {
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("playerOne@SomeRandomEmail.com"))
 */

/* const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() +name.slice(1).toLowerCase();

}

console.log(toProperCase("october"))
 */





// Functions

// Functions are Reusable Code!



/////////////////////////////

// var, let, and const.

/* var x = 1;
var x = 2;
console.log(x); */

// VAR is not preferable, because we won't notice the error if we give the same name to another variable.


/* let x = 1;
let x = 2;
console.log(x);
 */

// now we get an error 

//when we reasign the value, the error doesn't show up.

/* const x = 1; 
x = 2;
console.log(x); */


// in the CONST, even if we reasign the value of the variable, the error shows up, thats why it is preferable to use const in our code!


// global scope

/* var x = 1;
let y = 2;
const z = 3; 


// local scope


    function myFunct() {
    const z = 5;
    console.log(y);    



    // local scope 
 { 
    let y = 4;
    console.log(y);
    }
}

    myFunct();
 */


// global scope 
/* var x = 1; //function scoped
let y = 2; // block scoped
const z = 3;


console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);


function myFunc() {
    var x = 10;
    const z = 5;
{
    var x = 11; // function scoped
    const z = 6; // block scoped
    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);

}
console.log(`function: ${x}`);
console.log(`function: ${y}`);
console.log(`function: ${z}`);
}

myFunc(); */




// GLOBAL = not in a function or block. not desirable
//LOCAL - in a funcion or block. not global
// VAR =  instantiates function() scoped vatiables.
// LET and Const instantiate {blovk} scoped variables 


// TIPS : AVOID USING VAR. STICK WITH CONST AND LET
// USE CONST UNLESS YOU NEED TO REASSIGN VALUE
// USE LET IF YOU KNOW YOU WILL REASSIGN VALUE.














































