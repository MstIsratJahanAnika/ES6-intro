// const phone = {
//     name: 'iphone',
//     price: 777,
//     description: 'this is newly launched model of apple company'
// }
// const newPrice = phone.price + 100; 
// const phoneName = `this is ${phone.name}`;

// variable er maddhome value access 

// const price = phone.price;
// const name = phone.name;

// property er nam a object create kore 
 
const {description} = { name: 'iphone', price: 1000, description: 'apple brand phone'};
console.log(description); //only oi property access hobe 

const [num1, num2, num3, num4] = [2, 4];
console.log(num1, num2, num3, num4); //last dui ta undefined->value set kora hoy nai 

const [a, b, c] = ['ami', 'tumi', 'nodir', 'pare', 'badam', 'khai'];
console.log(a,b,c); //beshi value ase je gula call hobe shegular e value dekabe baki gular na

const [height, weight] = numbers; //numbers er 1st element height a, second ta weight a jabe 
