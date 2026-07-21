const name = "aman"
const repoCount = 50

// console.log(name + repoCount + " Value");

// Better way to concatinate the string 
// using backtish, string interposition
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 

// another way to initialize string
const gameName = new String('aman-nayak')

// console.log(gameName[0]); //It will give (key value pair) // a
// at all key value it not give position it is actually object
// console.log(gameName.__proto__); // {}

// string prototype
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // a
console.log(gameName.indexOf('a')); // 0

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "     aman.   "
console.log(newStringOne); //       aman.        
//trim
console.log(newStringOne.trim()); // aman

const url = "https://aman.com/aman%20nayak"

//replace
console.log(url.replace('%20', '-'))  // https://aman.com/aman-nayak

// check
console.log(url.includes('sundar')) // false
console.log(url.includes('aman')) // true

// to convert string into array
console.log(gameName.split()); // - , . etc

// Today's task is to go to mdn and read string prototype
