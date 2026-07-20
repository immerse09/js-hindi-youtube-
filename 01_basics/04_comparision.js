// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// problem occure when compare whith different datatype
// so whenever you compare make sure the datatype should be same
// coz. typescript never allow to compare with differnt datatype

// console.log("2" > 1); true
// console.log("02" > 1); true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// === (strict check)

console.log("2" === 2);