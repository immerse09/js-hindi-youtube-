const name = "aman"
const repoCount = 50

// console.log(name + repoCount + " Value");

// Better way to concatinate the string 
// using backtish, string interposition
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 

// another way to initialize string
const gameName = new String('aman')

// console.log(gameName[0]); //It will give (key value pair) // a
// at all key value it not give position it is actually object
// console.log(gameName.__proto__); // {}

// string prototype
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // a
console.log(gameName.indexOf('a')); // 0
