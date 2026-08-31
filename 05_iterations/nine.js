const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// by arrow func.
const myTotal = myNums.reduce( (acc, currval) => acc+currval, 0)

// console.log(myTotal);

const myShoppingCart = [
    {
        itemName: "js course",
        price: 1200
    },
    {
        itemName: "py course",
        price: 1300

    }, 
    {
        itemName: "cpp course",
        price: 5000
    },
]

// work is: to make a func. to add all prices in myShoppingCart
 
const priceToPay = myShoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
