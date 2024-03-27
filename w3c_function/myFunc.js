
// Define a function named greet that takes a parameter name and logs a greeting message to the console.
function greet( name){
       console.log("Hi "+ name + " how are you?")
};
greet("Anup");

//Enhance the greet function from question 1 to have a default parameter of "Guest" for the name parameter.
function greetWithDefault( name = "Guest"){
    console.log("Hi "+ name + " how are you?")
};
greetWithDefault();

//Create a function called addNumbers that takes two parameters, num1 and num2, and returns their sum.
function addNumbers(num1, num2){
         //console.log ("The sum of " + num1 + " \+ " + num2 + " is : " +x)
         return sum = num1 + num2; 
};
let mynum = addNumbers(5.5, 5);
console.log(mynum);

//Create an anonymous function and assign it to a variable called multiply. The function should take two parameters and return their product.
const multiply = function (num1, num2){
 return num1*num2 ;
}
const multiResult = multiply(5,8);
console.log(multiResult);

// functions are variable just like everyting else 
function test(){
    // do something.
};
// I have new variable and assign it to function test
const test2 =test; 
console.log(test2 === test); // these comparision will return true.. as they are same.
console.log(test);