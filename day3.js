// Pyramid problem:
// print:  (using a loop)
// #
// ##
// ###
// ####
// #####

//Ex. 1
// let pyramid = "#"
// for( i=0; i<4; i++){
//     if(i===0){
//         console.log(pyramid)
//     }
//     if(i===1){
//         console.log(pyramid+pyramid)
//     }
//     if(i===2){
//         console.log(pyramid+pyramid+pyramid)
//     }
//     if(i===3){
//         console.log(pyramid+pyramid+pyramid+pyramid)
//     }
// }

//Ex. 2
let pyramid = "#"
for ( i=0; i<6; i++){
    console.log(pyramid)
    pyramid = pyramid + "#"
}

/* Extra for experts: 
1. Write a function named assignGrade that takes one argument, a number score.
Returns a grade for the score, either  "A," "B," "C," "D," or "F." 
Call that function for a few different scores and log the result to make sure it works. */

const assignGrade = {
    A: 100,
    B: 80,
    C: 70,
    D: 60,
    F: 50
}
console.log(assignGrade.F)

// function assignGrade(numGrade){
//     return 
// }