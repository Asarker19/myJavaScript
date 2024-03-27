const numbers = [45, 4, 9, 16, 25]

// this myFunction has 3 default parameters, they are value, index and array
function myFunction(value, index, array){
    // lets test what it is passing on each iteration 
    console.log(value);
    console.log(index);
    console.log(array);
    console.log("_____________________");
}

// array method
numbers.forEach(myFunction);
