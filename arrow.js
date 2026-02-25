add(10, 20); //function declaration er age use kora jay -> traditional method 

function add(num1, num2){
    const sum = num1 + num2;
    console.log(sum);
}


// add2(10, 20); const a function likhe funtion declare er age call kora jay na
// function expression
const sum2 = function add2(num1, num2){
    const sumIs= num1 + num2;
    console.log(sumIs);
}

// arrow function -> kisuta expression function type 
const arrowSum = (num1, num2) => num1 + num2;
console.log(arrowSum(23, 25));

const tenTimes = x => x*10; // parameter => ki hobe function a 
const tenTimes2 = (x) => x*100;
const addAll = (a, b, c, d, e) => (a+b+c+d+e); 
// ek line a function hole bracket lagbe na, multiple line code hole {..} er moddhe hobe 

// multi line arrow function
const doMath = (x, y) => {
    const sum = x+y;
    const diff = x-y;
    const result = sum - diff;
    return result;
}


const isEven = x => x%2 === 0; // true hole true return korbe 
