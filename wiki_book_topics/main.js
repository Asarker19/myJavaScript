// To run js in terminal node main.js
// let x =5;
// x --;
// let z = x;
// console.log(z);

// let x = 5;
// let z = x ** 2;
// console.log(z);
// let y = Math.pow(x,2);
// console.log (y);

// Function 
// TO compute two items 
// function myComputeFunc (itm1, itm2){
//     return itm1 * itm2;
// }   

// console.log("Item 1 X Item 2 = " + myComputeFunc(4,5));

// Object
// const person = {
//     firstName : "Anup",
//     lastName : " Sarker",
//     age : 47,
//     address : {
//         line1 : "9",
//         street: "Bellevue Ave",
//         suburb: "Salisbury",
//         state: "QLD"
//     },
// };

// let addressP1 = person.address.line1+" " + person.address.street +" ";
// let addressP2 =  person.address.suburb +" " + person.address.state;

// function myAddress(){
//     return addressP1 + "" + addressP2;
// };

// console.log(myAddress());

// let myName = person.firstName + " "+ person.lastName;
// let myAge = person.age; 
// let myDetails =myName + " , My age: " + myAge ;
// console.log(myDetails)

// String length 
// let text = "shakshlhsdhhdhXXhijhol";
// let length = text.length;
// console.log(length);

// String slice - start position and end position in the parameter 
// let text= "ANUPSARKER";
// let part = text.slice(0, 4);
// console.log (part);

// String indexOf() + search()
// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate");
// console.log (index);

// let text = "Please locate where 'locate' occurs!";
// let txtSearch = text.search("locate");
// console.log (txtSearch);

// let num = 1241545;
// console.log(typeof(num));
// let strNum = num.toString();
// console.log (strNum);
// console.log(typeof(strNum));

// toExponential() Method -- returns a string, with a number rounded and written using exponential notation.
// let x = 9.561; 
// x.toExponential(2);
// console.log(x);
// let x4 = x.toExponential(4);
// console.log(x4);
// let x6 = x.toExponential(4);
// console.log(x6);

// toFixed() returns a string, with the number written with a specified number of decimals:
// let x = 9.565;
// x.toFixed(0);
// console.log (x);
// let x4 = x.toFixed(4);
// console.log(x4);

//toPrecision() returns a string, with a number written with a specified length:
// let x = 9.561; 
// x.toPrecision();
// console.log(x);
// let x4 = x.toPrecision(2);
// console.log(x4);
// let x6 = x.toPrecision(4);
// console.log(x6);

// valueOf() returns a number as a number.
// let x  =123;
// x.valueOf();
// console.log(typeof(x));

//array: change an arrauy element 
// const cars = ["Saab", "Volvo", "BMW"];
// console.log (cars);
// cars[0] = "Opel";
// console.log (cars);

//Array Elements Can Be Objects
// myArray[0] = Date.now;
// myArray[1] = myFunction;
// myArray[2] = myCars;

//Adding Array Elements
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;
// fruits.push("Lemon");
// console.log (fLen);
// console.log (fruits);

// In JavaScript, arrays use numbered indexes.  
// In JavaScript, objects use named indexes.

// Array Size - array.length();
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let size = fruits.length;
// console.log (size);

// toString() converts an array to a string of (comma separated) array values.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let toStringArray = fruits.toString();
// console.log (toStringArray);

// array.at() method returns the same as [].
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruitAtArray = fruits[3];
// console.log(fruitAtArray);

//Array join()- join() method also joins all array elements into a string.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.join(" X ")) ;
// console.log(fruits.join("*")) ;

//Popping items out of an array, or pushing items into an array.
// each time it remove one item from the end of the array elements. 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.pop();
// console.log(fruits);

//push() method adds a new element to an array (at the end):
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");
// console.log(fruits);
// fruits.push("Jackfruit");
// console.log(fruits);

//shift(): Shifting is equivalent to popping, but working on the first element instead of the last.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits);

//unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits );
// console.log(fruits.unshift("Lemon"));
// console.log(fruits );

// concat():method does not change the existing arrays. It always returns a new array.
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = arr1.concat(arr2, arr3);
// console.log(myChildren);

//copyWithin() method copies array elements to another position in an array:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.copyWithin(2, 0, 2);
// console.log(fruits );

// The splice() method adds new items to an array.
// The slice() method slices out a piece of an array. method creates a new array.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits );

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(2); //Slice out a part of an array starting from array element 2
// console.log(citrus );

// Array Find and Search Methods
//indexOf() method searches an array for an element value and returns its position.

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// console.log(fruits );
// let position = fruits.indexOf("Apple")+1;
// console.log(position);

//Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// console.log(fruits );
// let position = fruits.lastIndexOf("Apple")+1;
// console.log(position);

//Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.includes("Mango")); // is true

//find() method returns the value of the first array element that passes a test function.
// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log (first);

//findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.
// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.findLast(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log (first);

//array indexOf()
const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let checkIndex = fruits.includes("Apple");
let sortArray = fruits.reverse();
console.log (sortArray);