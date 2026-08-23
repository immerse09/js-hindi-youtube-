const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


// marvel_heros.push(dc_heros) // it push in same array

// console.log(marvel_heros)
// [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]


// const allHeros = marvel_heros.concat(dc_heros) // it gives new array
// console.log(allHeros)
//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator

// console.log(all_new_heros)

// const another_array = [1,2,3, [4,5,6], 7, [6,7], [4,5]]

// // this mothod convert all multi array into single array
// const real_another_array = another_array.flat(Infinity) 
// console.log(real_another_array)


// -----

console.log(Array.isArray("Aman")) // false
console.log(Array.from("Aman")) // ['A', 'm', 'a', 'n']
console.log(Array.from({name: "Aman"})) // interesting , [] null

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))