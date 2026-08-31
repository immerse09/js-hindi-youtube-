const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function  (val) {
//     console.log(val);
// } )

// also in arrow function

// coding.forEach(  (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// also
// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })


const muCodding = [
    {
        languageName: "javascript", 
        languageFileName: "js"
    },
    {
        languageName: "python", 
        languageFileName: "py"
    },
    {
        languageName: "java", 
        languageFileName: "java"
    }
]

myCodding.forEach( (item)=> {
    console.log(item.languageName);
})