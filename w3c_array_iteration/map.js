// map() returns a new array 
// if we are using map(), it must have a return from the function
// map also has 3 default parameters, they are value, index and array, we can use them as we need. 
// in the example we are going to multiply current array by 2 and it will return a new array 
const numbers = [45, 4, 9, 16, 25];

function myFunction(value, index, array){
    // lets test what it is passing on each iteration 
   return value * 2;
};

// to capture the new array we are creating a new array called new Numbers
const newNumbers = numbers.map(myFunction);
console.log("This is our  inital array: "+ numbers);
console.log("This is a new array, created from the inital array: "+ newNumbers);