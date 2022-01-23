/* Problem 1:
1. Write a loop that outputs
10
9
8
...
2
1
// BlAST OFF!*/

const descenNum = [1, 2, 3, 4, 5, 8, 9, 10];

//Example 1:
for (const number of descenNum.reverse()) {
  console.log(number);
}
console.log("BLAST OFF!");

//Example 2:
for (let i = 10; i > 0; i--) {
  console.log(i);
  if (i === 1) {
    console.log("BLAST OFF!");
  }
}

//Example 3:
for (let i=0; i < descenNum.length; i++) {

}  console.log(...descenNum.reverse() + 'Blast Off!')

//-----------------------------------------------------------------
/* Problem 2: 
Create a function that takes an array of numbers
& return both min and max in that order. (use a loop) */

const arr = [4, 3, 6, 1, 5, 2, 7];

// Example 1:
for (let i = 0; i < arr.length; i++) {
  console.log(Math.min(...arr),",", Math.max(...arr));
}

// Example 2:
function findMinMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return [min, max];
}
console.log(findMinMax(arr));

//---------------------------------------------------------------

// Problem 3: Converts a string to uppercase letters:
let str = "WHAT a TIME to BE ALIVE!"

//Example 1
let str = "WHAT a TIME to BE ALIVE!";
console.log(str.toUpperCase());

//Example 2
function capsCase(str){
    console.log(str.toUpperCase());
}
console.log(capsCase(str))
