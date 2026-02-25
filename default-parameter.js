// const num1 = 10;
// const num2 = 90;

function add(num1, num2){
    const add = num1 + num2;
    console.log(num1, num2, add);
}

// function call
add(10, 90);

// Undefined avoid korte default = 0 value use kora jay 
function add2(num1, num2 = 0){
    const sum = num1 + num2;
    console.log(num1, num2, sum);
}
add2(80); //dui khetre e kaj korbe 
// add2(80, 10);


// function-3 - work with string
function fullName(first, last = '') // empty string to avoid undefined situation
{
    const name = first + ' ' + last;
    console.log(name);
}

fullName('Israt', 'Jahan');
fullName('Anika');

/**
 * to avoid undefined in function call
 * 
 * string --> ' '
 * number[add] --> 0
 * number[multiply] --> 1
 * array --> []
 * object --> {}
 * boolean --> hishab bujhe true/false
 */