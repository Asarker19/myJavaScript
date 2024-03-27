let firstName = 'Anup';
let lastName = new String ('Sarker');
let age = 47;

console.log("Type of First name : " + typeof firstName);
console.log("Type of age : " + typeof age);
console.log(("First name is instance of string check returns : "), firstName instanceof String);
console.log("Above is showing false due to it is not explicitly defined as string");
console.log(("Last name is instance of string check returns : "), lastName instanceof String);
console.log("Above is showing ture due to it is now explicitly defined as string");
console.log( typeof [1,2,23,4]); // list returns object
console.log( typeof false); // checking boolean 
console.log( typeof NaN); // NOt a number or number 
console.log( typeof {name:'Arjon', age: 10}); // map returns objects
console.log( typeof new Date()); // date object
console.log( typeof null); // Checking object