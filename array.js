// let array = [1, 4, 11, 2, 37, -4]
// //consol.log(array[2]) would pring #11
// //create variables to store out min and max values

// let min = array[0]
// let max = array[0]
// for (let i = 0; i < array.length; i++){
//     // console.log(array[i])
//     let currentValue = array[i]
//     if(currentValue < min){
//         console.log(`The Current value ${currentValue} is lower than our current minimum ${min}`)
//         min = currentValue
//     }

//     if (currentValue > max){
//         console.log(`The Current Value ${currentValue} is higer than our current max ${max}`)
//         max = currentValue
//     }
// }
// console.log(`In the array ${array} the highest vakue is ${max} and the lowest value is ${min}`)
// const array_1 = [1, 4, 11, 2, 37, -4]
// let i = 0;
// while (i < array_1.length){
//     console.log(array_1[i]);
//     i++;
// }

let backPack = []

backPack.push('sword')
backPack.push('shield')
backPack.push('food')

// console.log(backPack)

backPack.splice(0,1)

// console.log(backPack)

backPack.unshift('coat')

// console.log(backPack)

backPack.shift()

// console.log(backPack)

backPack.pop()

// console.log(backPack)

backPack.push('flint','blanket','knife', 'food')

// console.log(backPack)

// console.log(backPack.length)

let satchel = backPack.splice(3,2)

console.log('satchel', satchel, 'backpack', backPack)

backPack.push(...satchel)
// backPack.pop('knife','food')
// console.log(backPack)
console.log(...backPack)

let backPack2 = [...backPack]
console.log(backPack2, 'This is b2')

// for(i = 0; i< backPack.length; i++){
//     console.log(backPack[i])
// }

// for(i = 0; i < satchel.length; i++){
//     console.log(satchel[i])
// }


// if(backPack.length >= 2){
//     for(i=0; i<2; i++){
//         console.log(backPack[i])
//     }
// } else {
//     for(i=0; i< backPack.length; i++){
//         console.log(backPack[i])
//     }
// }

let demoArray = ["apples", "bannanas", "cherries"]

let demoCopy = demoArray.slice()
//creating seperate copy

//let demoCopy = demoArray this makes demoCopy simply a refferance not an actual copy.

console.log(demoCopy)

demoCopy.pop()

console.log(demoArray)