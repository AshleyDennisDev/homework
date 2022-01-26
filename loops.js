// write a loop that creates a new array with the square of each number
let numArray = [2, 7, 18, 21, 50];

for(let i of numArray){
    console.log(i*i)
    }

function squareArr(origArr){
    let newArr = []
    for (i of origArr){
         let thisSquare = i * i
    } return newArr.push(thisSquare)
}
squareArr(numArray)

function squareArr(origArr){
    let newArr = []
    for (i of origArr){
         newArr.push(i * i)
    } return newArr
}
console.log(squareArr(numArray))

// -------------------------------------------------------------------
let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351

function addNum(arrTotal) {
  let sumArrs = 0;
  for (i = 0; i < arrTotal.length; i++) {
    sumArrs = sumArrs + arrTotal[i];
  }
  return sumArrs;
}
console.log(addNum(arr_1) + addNum(arr_2))
// --------------------------------------------------------------------
// Using a for loop print all even numbers up to and including n. Don’t include 0.
// Example output:
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
let n1 = 22;

function findEvens() {
  for (i =2; i <= 22; i++) {
    if (i % 2 == 0){
   console.log(i) 
    }
  }
}findEvens(n1)

for (i =2; i <= 22; i++){
    if (i % 2 == 0){
   console.log(i)
    }
  }
//-----------------------------------------------------------


