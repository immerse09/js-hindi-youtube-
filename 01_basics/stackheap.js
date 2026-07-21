// How actually memory works in javascript / memory allocation

// Stack (primitive) and Heap (non premitive)

let myYoutubename = "amannayak"

let anothername = myYoutubename 

// console.log(anothername); // amannayak

anothername = "chaiaurcode";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"