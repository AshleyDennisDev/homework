let arr1 = [4,7,8,5,3,9,1]

// function firstElm(val){
//     return val[0]
// }
// console.log(firstElm(arr1))


// function lastElm(val){
//     return val[val.length -1]
// }
// console.log(lastElm(arr1))

// function findNum(arr, indNum){
//     return arr[indNum]
// }
// console.log(findNum(arr1, 3))


function findIndex(arrNum,elem){
    for(let i=0; i< arrNum.length; i++){
        if(arrNum[i] === elem){
            return i
        }
    }    
}
console.log(findIndex(arr1, 7))