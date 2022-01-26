// const usd = 65;
// const euro = 0.88;

// function currConversion(doll) {
//   return doll * euro;
// }
// console.log(`${currConversion(usd)} Euros are equivalent to ${usd} U.S dollars`);

//Convert Celsius to Farenheit
// const tempC = 8.5

// function temppConversion(celsToFar){
//     return (celsToFar *(9/5)) + 32
// }
// console.log()

const tips = [5, 8, 13, 2, 14, 27, 9, 18];

function addNumbers(arrOfTips) {
  let totalNum = 0;
  for (let i = 0; i < arrOfTips.length; i++) {
    totalNum = totalNum + arrOfTips[i];
  }
  return totalNum;
}
console.log(addNumbers(tips));
