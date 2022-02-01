const students = [
    {name: 'Megan', drinkingAge: true, age: 33},
    {name: 'Emil', drinkingAge: true, age: 32},
    {name: 'Mailbu', drinkingAge: false, age: 19}
]

const isDrinkingAge = students.some(student => student.drinkingAge)
console.log(isDrinkingAge)

/* or use age<21
const isDrinkingAge = students.some(student => student.age<21)
console.log(isDrinkingAge)
*/

const areAllDrinkingAge = students.every(student => student.drinkingAge)
console.log(areAllDrinkingAge)

const oneWhoCanDrink = students.find(student => student.drinkingAge)
console.log(oneWhoCanDrink)

const oneWhoCanDrink = students.find(student => !student.drinkingAge)
console.log(oneWhoCanDrink)

const findAllOfAge = students.filter( student => student.drinkingAge)
console.log(findAllOfAge)

const isDrinkingAge = students.some(student => student.age<21)
console.log(isDrinkingAge)
