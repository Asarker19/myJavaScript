let i;

console.log ("This is exmaple for - For loop.");
for (i = 1; i <= 5 ; i++){
    console.log("Value of i is :" + i);
}

console.log ("This is exmaple for -For in loop.");

let fruits = ['Apple', 'Banana', 'Grapes'];
let x; 
for (x in fruits){
    console.log("This will only print the index :" + x);
    console.log("This will print the index and array value " + x + ": " + fruits[x]);
    console.log("For in loop we need to specify the index");
}
console.log ("This is exmaple for -For of loop.");
for (x of fruits){
    console.log("This will print the entier array :" + x);

}
console.log("For of loop NO need to specify the index");
