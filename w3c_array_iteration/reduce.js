//  it also has 4 parameters total, value, index and array
// it doesn't create any new array, it reduce the array into one single value.
//(method) Array<number>.reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number (+2 overloads)
const numbers = [45, 4, 9, 16, 25];

function myFunction(total, value, index, array){
    // it remember Previous value and it add/subtract .. with the next value 
    console.log(total);
    console.log ("---------");
    return total+value;
       
};

const newNumbers = numbers.reduce(myFunction);

console.log(newNumbers);