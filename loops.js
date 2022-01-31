// write a loop that creates a new array with the square of each number
let numArray = [2, 7, 18, 21, 50];

for(let i of numArray){
    console.log(i*i)
    }

function squareArr(origArr){
    let newArr = []
    for (i of origArr){
         let thisSquare = i * i
         newArr.push(thisSquare)
    }
    return newArr
}
console.log(squareArr(numArray))

function squareArr(origArr){
    let newArr = []
    for (i of origArr){
         newArr.push(i * i)
    }
    return newArr
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

let arr_3   = [4, 6, 7];
let arr_4    = [8, 1, 9];

function addInd(x,y){
    let sumArr= []
    for(let i=0; i< arr_3.length; i++){
      let sum = (x[i]+y[i])
      sumArr.push(sum)
    }
return sumArr
}

console.log(addInd(arr_3, arr_4))
//-------------------------------------------------

//Using a for loop output the elements in reverse order
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

function revLoop(value) {
  for (let i = 0; i <= arr.length; i++) {
    return value.reverse();
  }
}
console.log(revLoop(arr));
//-------------------------------------------------
/*Given a string change the every second letter to an uppercase ‘Z’. 
Assume there are no space.*/

let str1 = "javascript";

function secondUp(param) {
    let newString = ''
  for (let i = 0; i < param.length; i++) { 
    if ((i + 1) % 2 == 0){
        newString += 'Z'
    } else {
       newString += param[i]
    }
 } 
  return newString
}
console.log(secondUp(str1))
also
function secondUp(param) {
    let newString = ''
  for (let i = 0; i < param.length; i++) { 
    if ((i + 1) % 2 !== 0){
        newString += param[i]+'Z'
    }
 } 
  return newString
}
console.log(secondUp(str1))
//-------------------------------------------------------
/*Check if a string contains the letter “y”. 
Print “yes” if it does and “no” if it does not.*/

let str2 = "don't know why"

function findY(string){
  for( i=0; i< string.length; i++){
    if (string.includes('y')) {
      return 'yes'
    }else {
      return 'no' 
      }
    }
  }

console.log(findY(str2))

