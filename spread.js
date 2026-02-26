const math = Math.max(3, 5,1,7, 8, 90, 45, 23, 21, 89, 66, 11);
// max number ber kore dibe

console.log(math);
// ei method a array er max number ber kora jay na
const arr = [23, 63, 12, 98, 64, 33, 85, 47];
const max1 = Math.max(arr);//array hishebe asheb , output => NaN
const max2 = Math.max(...arr);//spread operator, array er element bichaye dey

console.log(max1);//NaN 
console.log(max2); //max number dibe

console.log(arr); //pura array dibe 
console.log(...arr); // arraye elements dibe 

const params = [43, 67, 33];
function sum(x, y, z){
    return x+y+z;
}

console.log(sum(params)); //kaj korbe na 

// console.log(sum(...params));
const result = sum(...params); //spread kore element a kaj korbe 
console.log(result);

const arr1 = [2,4,6, 8,19];
const arr2 = arr1;
arr2.push(36);

// dui array tei 36 push hobe 
console.log(arr1);
console.log(arr2);

const arr3 = [...arr1, 80, 90]; //arr3 alada obj, array te direct boshano jabe
arr3.push(100); //arr1 a push hobe na just arr3
console.log(arr3);
console.log(arr1);

// obj er khetre o same 
const person = {name: 'alice', age: 26};
//const person2 = person; //reference thakbe 
const person2 = {...person, designation: 'developer'} //reference thakbe na 
person.salary = 40000;
console.log(person);
console.log(person2);
