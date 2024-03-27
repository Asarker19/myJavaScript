console.log("Array");
console.log(
  "******************************************************************* "
);
let numbers = [1, 2, 5, 4, 5]; // int type
console.log("1st method to declare arrays in js.");
console.log("We have declared int type array inside [] bracket :" + numbers);
console.log(
  "******************************************************************* "
);
let fruits = ["Apple", "Banana", "Grapes"]; // string type
let size = fruits.length;
document.getElementById("demo").innerHTML=size;

console.log("We have declared string type array inside [] bracket :" + fruits);
console.log(
  "******************************************************************* "
);
console.log(
  "******************************************************************* "
);
let cars = new Array("Ford", "Toyota", "BMW");
console.log("2nd method to declare array in js .. using new Array ");
console.log("We have declared Array using 'new Array' operator " + cars);
console.log(
  "******************************************************************* "
);
console.log("Checking index positon in cars Array : " + cars[1]);
console.log(
  "******************************************************************* "
);
console.log(cars);
cars[1] = "Honda";
console.log("We are changing index 1 position Toyota with Honda: ");
console.log(cars);
console.log(
  "******************************************************************* "
);
console.log("We are going to add a new car Mercedes in the cars Array: ");
console.log(cars);
cars.push("Mercedes");
console.log("After adding new car :");
console.log(cars);
console.log("Verify how many elements after the change: " + cars.length);
console.log(
  "******************************************************************* "
);
console.log("Explore array with the loop!! ");

let x;
for (x in cars) {
  console.log("Result of 'for in' loop: " + cars[x]);
}
console.log(
  "******************************************************************* "
);
for (x of cars) {
  console.log("Result of 'for of' loop: " + cars[x]);
}
console.log("it is returning undefined above !!!!! ");
for (x of cars) {
  console.log("Result of 'for of' loop: " + x);
}
console.log(
  "******************************************************************* "
);

