
let userName = "John";

function showMessage2() {
    const userName = "Bob";
    let message = `Hello ${userName}`;
    console.log(message);
}
console.log('outside 1: ' + userName);


//2
Arrow funktion

let sum = (a, b) => a + b;
console.log( sum(1, 2) ); 


//3
useMeAnywhere();
// useMeAfterYouDeclareMe(); // ReferenceError: Cannot access

// function declaration
function useMeAnywhere() {
	console.log('I can be used anywhere.');
}
//4
// function expression
const useMeAfterYouDeclareMe = () => console.log('You can only use me after you declare me.');

useMeAfterYouDeclareMe(); // works 

//5 function exponent
function exponent(num, times) {
	result = 14;
}

exponent(3, 2);
console.log(result)
//6  shadowing
let firstName = 'Hans';

function getStatus() {
	firstName = 'Jim';
	console.log(firstName);
}

getStatus();
console.log(firstName);
//6 temp
function exponent(startNumber, exponent) {
    let result = 0;
    const multiplicationResult = startNumber * startNumber;
    for (let i = 0; i < exponent; i++) {
      result += multiplicationResult;
    }
    console.log(result);
  }
  
  exponent(2, 2);   