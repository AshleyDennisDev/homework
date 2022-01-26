// function areaOfSquare(length, width) {
//   console.log(length * width);
// }
// console.log(5 * 8);

// //-------------------------------------------------------
// //-------------------------------------------------------

function totalPoints(twoPointers, threePointers) {
  return (twoPointers *2) + (threePointers*3);
}
console.log(totalPoints(20, 20))
console.log(totalPoints(25,15))
// //-------------------------------------------------------
// //-------------------------------------------------------

// function addition(a, b) {
//   return a + b;
// }
// console.log(addition(2, 4));

//----------------------------------------------------------

let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output: 
// 627

function sumOfArrs(sum1){
    let i=0;
for (i=0; i< arr_1.length; i++){
     sum1 += arr_1[i];
} return sum1
}
console.log(sumOfArrs(arr_1))
