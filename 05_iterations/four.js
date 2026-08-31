const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// note: since for of loop not working on object 
// so learn about for in loop

for (const key in myObject) {
    // console.log(key); // only key
//     console.log(`${key} shortcut is for ${myObject[key]}`);
}

//  can we use for in loop on array

const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming){
    // console.log(key); // 0 1 2 3 4 5
    // console.log(programming[key]);
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


for(const key in map){
    console.log(key);
}

// on map not iterable