//1. Write a function that receives a person object as an argument and outputs the persons full name.
const person = {
  firstName: "Todd",
  lastName: "Albert",
  email: "todd@bocacode.com"
}

function getPerson(){
    console.log(person.firstName, person.lastName)
}
getPerson(person)

// 1. Write a function that adds two numbers together.

function addVal(a, b){
    console.log(a+b)
}
addVal(8,5)

// 2. Create a function that takes the age in years and returns the age in days.

function ageToYr (age) {
    console.log(age * 356) 
}
ageToYr(50)


// 3. Create a function that takes an array containing only numbers and returns the first element.

let intArr = [3,11,87,9,17]

function getFirst(elem1) {
    return elem1.shift()
}
console.log(getFirst(intArr))

function getFirst(elem1) {
    console.log(elem1.shift())
}
getFirst(intArr)
