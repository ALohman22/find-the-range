let array = [1, 4, 11, 2, 37, -4]
//consol.log(array[2]) would pring #11
//create variables to store out min and max values

let min = array[0]
let max = array[0]
for (let i = 0; i < array.length; i++){
    // console.log(array[i])
    let currentValue = array[i]
    if(currentValue < min){
        console.log(`The Current value ${currentValue} is lower than our current minimum ${min}`)
        min = currentValue
    }

    if (currentValue > max){
        console.log(`The Current Value ${currentValue} is higer than our current max ${max}`)
        max = currentValue
    }
}
console.log(`In the array ${array} the highest vakue is ${max} and the lowest value is ${min}`)
// const array_1 = [1, 4, 11, 2, 37, -4]
// let i = 0;
// while (i < array_1.length){
//     console.log(array_1[i]);
//     i++;
// }