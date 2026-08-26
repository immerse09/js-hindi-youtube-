// by singleton or constructor
// const tinderUser = new Object() // singleton object
const tinderUser = {}  // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Samay"
tinderUser.isLoggedIn = false

// console.log(tinderUser);  //{ id: '123abc', name: 'Samay', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "aman",
            lastname: "nayak"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);  // aman (also lot more)

const obje1 = {1: "a", 2: "b"}
const obje1 = {3: "a", 4: "b"}
const obje1 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...bj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
// 