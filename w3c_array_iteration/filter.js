
// filter() method returns a new array
//  it also has 3 parameters value, index and array
const numbers = [45, 4, 9, 16, 25];

function myFunction(value, index, array){
       return value > 11;
};

const newNumbers = numbers.filter(myFunction);

console.log(newNumbers);