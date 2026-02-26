const employee = {
    name: 'john arner',
    position: 'software-engineer',
    1: 'front-desk', // accessible hobe na -> dot notation diye  
    'home-address': 'dhaka, bangladesh',
    salary: 50000 
}

// dot notation diye value access 
console.log(employee.name);
console.log(employee.position);

// console.log(employee.home-address);
//console.log(employee.'home-address'); // dui tai error dekhabe 

// use of bracket notation - all key accessible 
console.log(employee[1]);
console.log(employee["home-address"]);
console.log(employee["name"]);


const money = employee ["salary"]; //bracket er moto e kaj korbe 
console.log(money);

//variable er maddhome access kora 
const key = 'position';
console.log(employee[key]);