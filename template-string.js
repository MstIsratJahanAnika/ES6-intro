const firstname = 'kamruzzaman';
const lastname = "shuvo";

// ei dui ta diye multiple line a likha jay na error dibe 

// const fullname = "israt 
// jahan
// anika"

// use template-string (backtick)
const fullname = `israt
jahan 
anika`

console.log(`my name is, ${fullname}`); //dynamically variable call

// calculation o kora jay 
console.log(`total amount is, ${(50+40)*3 + 500}`);

console.log(`${firstname} ${lastname}`);


function getCardHTML(name, description, price){
    const div = `<div class = "card">
    <h2>${name}</h2>
    <h2>${name.toUpperCase()} borolok</h2>
    <p>${price}</p>
    <p>${description}</p>
    </div>
    `
    console.log(div);
}

getCardHTML('iphone 17', 'this is the latest version of iphone', '$1000');