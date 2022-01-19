const testArray = [
  true,
  false,
  false,
  true,
  false,
  false,
  false,
  true,
  true,
  true,
  true,
];

//Example 1 to find Duplicates
let counter = 0;
for (const word of testArray) {
  if (word) {
    counter++;
  }
}
console.log(counter);

//Example 2 to find Duplicates
let count = 0;
function countTrues(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      //could also be written as .... if (arr[i] === true)
      count++;
    }
  }
  return count;
}
console.log(countTrues(testArray));
//.......................................................................
let car = {
  make: "lexus",
  model: "Nx",
};
console.log(car.make, car.model);
//.......................................................................
let colors = ["orange", "blue", "yellow", "purple"];
let myColor = colors.shift();
console.log(myColor);
