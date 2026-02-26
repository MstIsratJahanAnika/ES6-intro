const numbers = [2, 4, 3, 6, 8, 11, 43, 24];

for(const i of numbers){
    console.log(i);
}

// jodi object thake 
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
// object a for-in loop 
for(const key in employee){
    const value = employee[key];
    console.log(key); //main object er key dibe
    console.log(key, value); //main object er key er shathe value dibe 
}