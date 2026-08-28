const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        // use this for current context here only
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // undefined
// }



const chai = () => {
    let username = "hitesh"
    console.log(this.username); // undefined
    console.log(this) // {}
}

chai()


// Arrow function

// basic arrow func. , with explicite
// const addTwo = (num1, num2) => { // if wrap in {} then write keyword
//     return num1 + num2
// }

// implicit return 
const addTwo = (num1, num2) => (num1 + num2) // if wrap in () then no need to write return keyword
// also
// const addTwo= (num1, num2) => num1 + num2

// we need to wrap in (), then it will work
const addTwo = (num1, num2) => ({username: " aman"})
console.log(addTwo(3,5))

const myArray = [2,3,5,8,7]

myArray.forEach()




