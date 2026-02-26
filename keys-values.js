const king = {name: 'mufasa', age: 55, kingdom: 'pride islands'};
const keys = Object.keys(king);
const values = Object.values(king);
const entries = Object.entries(king); // proti pair hishebe dibe

// console.log(keys, values, entries);

// delete property 
delete king.age; 
console.log(king);

// add property 
king.queen = 'sarabi';
king.son = 'the next king';
console.log(king);

Object.freeze(king); // add, delete, modify kora jabe na, freeze hoye jabe 
Object.seal(king); // add, delete kora jabe na but modify kora jay 