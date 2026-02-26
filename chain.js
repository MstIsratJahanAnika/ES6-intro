const employee = {
    name: 'john arner',
    position: 'software-engineer',
    1: 'front-desk', // accessible hobe na -> dot notation diye  
    'home-address': 'dhaka, bangladesh',
    family:{
        father: 'richard doe',
        mother: {
            name: 'anne doe',
            age: 40,
            occupation: 'teacher'
        },
        son: 'jade doe'
    },
    salary: 50000 
}

console.log(employee.family); //object 
console.log(employee.family.mother.age); //object er object er moddhe vallue access

// jodi mother object na thakto tokhon age console.log korte gele error dekhabe 
//solution -> optional chaining -> thakle khujo, na thakle khujo na 

console.log(employee.family?.mother?.age);  //na thakle undefined dekhabe , error dibe na 
