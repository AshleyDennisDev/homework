//1. Write a loop that outputs
// 10
// 9
// 8
// ...
// 2
// 1
// BlAST OFF!

// const descenNum = [1, 2, 3, 4, 5, 8, 9, 10];

// for (const number of descenNum.reverse()) {
//   console.log(number);
// }
// console.log("BLAST OFF!");

// for (const num of descenNum) {
// console.log(num);

// for (let i=0; i < descenNum.length; i++) {

// }  console.log(...descenNum.reverse() + 'Blast Off!')

/* 1. create a function that takes an array of numbers
 & return both min and max in that order. (use a loop) */

const arr = [4, 3, 6, 1, 5, 2, 7];

// for (let i = 0; i < arr.length; i++) {
//   console.log(Math.min(...arr),",", Math.max(...arr));
// }
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

// 1. Converts a string to uppercase letters:
// let str = "WHAT a TIME to BE ALIVE!"

// let str = "WHAT a TIME to BE ALIVE!";
// console.log(str.toUpperCase());

// function capsCase(str){
//     console.log(str.toUpperCase());
// }
// console.log(capsCase(str))
