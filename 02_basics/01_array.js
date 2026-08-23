// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]) // 1
// console.log(myHeros[0]) //shaktiman


// * Array methods *

// myArr.push(6) // push el. 
// myArr.push(7)
// myArr.pop() // pop a el. from end

// console.log(myArr)

// myArr.unshift(9) // add this el. st first and shift all the others,
// myArr.shift() // pop or delete first el. of array

// console.log(myArr.includes(9)) // false or -1
// console.log(myArr.indexOf(3))  // 3

// const newArr = myArr.join() // convert into string as 0,1,2,3,4,5
// console.log(newArr)


// slice , splice
console.log("A ", myArr); A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3) // [1,2]

console.log(myn1)
console.log("B ", myArr) // B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3)  // [1,2,3]
console.log("C ", myArr)  // C  [ 0, 4, 5 ]
console.log(myn2)


