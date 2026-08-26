
function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
// console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){

    // let result = number1+number2 // no result
    // return result // no res
    // return number1 + number2 // no result
}

const result = addTwoNumbers(2,3) // call
// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("aman"))
// console.log(loginUserMessage("aman"))


function calculateCartPrice(val1, val2, ...nnum1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "aman",
    prices:99
}

handleObject({
    username: "sam",
    price: 499
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(geetArray){
    return getArray[1]
}

console.log(returnSecondValue([200, 400, 500, 1000]));