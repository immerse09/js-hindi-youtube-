// objects can be created by literals and constructor

// singleton in second part, in this is literals

// object literals (Declare)

// Qs) Take a symbol, use as key in object and then print
  // declaring symbol
  const mySym = Symbol("key1")

const JsUser = {
    name: "Aman",
    "full name": "aman kumar",
    // mySym: "mykey1", // this is not the way, not actual reffering the symbol
    [mySym]: "mykey1", // for reffering symbol use []
    age: 18,
    location: "Jaipur",
    email: "amannayak@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// object acces
// console.log(JsUser.email)
// console.log(JsUser["email"]) // bec. key is taken as string
// console.log(JsUser["full name"])
// console.log(typeof JsUser.mySym)  // string
// console.log(JsUser[mySym]) // op: mykey1

// change value of object
JsUser.email = "nayakaman,com"
// console.log(JsUser["email"]) 
// Object.freeze(JsUser) // after that no change will happen in object
JsUser.email = "nayakaman.693com"
// console.log(JsUser)


// object with function
JsUser.greeting = function(){
  console.log("Hello JS user");
}

// ` (backtish does string manupulation) & ${this} gives reference of the object
JsUser.greetingTwo = function(){
  console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting);// [Function (anonymous)] i.e function return back
console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo());

