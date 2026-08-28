//var c = 300
// {} scope

let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// note: we can use global scope variable in local scope
//  but we cannot use local scope variable as globally



// console.log(a);
// console.log(b);
// console.log(c);

// nested scope or function
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website); // hitesh youtube
    }
    // console.log(website); // not in scope
}

// console.log(username); // not in scope


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // 6

function addone(num){
    return num + 1
}



addTwo(5) // error, coz func. is hold in variable , so we'll study 'hoisting'
const addTwo = function(num){
    return num + 2
}