var a = "animesh"
console.log(a);

a = "kakoty"
console.log(a);
// we are changing values of variable a
a = true
console.log(a);
// js won't complain here as it's Dynamically type 
// Js is single threaded with asynchronous behaviour => not blocking 
// js/java automatically manages mamory management ( using memeory) done by garbage collection => let me free up some memory


/*
    Create a variable for each of the following: 
    your favorite color, your height in centimeters, 
    and whether you like pizza. Use appropriate 
    variable declarations (let, const, or var). Try logging it using console.log

*/

const name = "animesh"
const age = 21
let favColor = "blue"
var height = 5.7
var pizzaLike = false

console.log(name);
console.log(age);
console.log(favColor);
console.log(height);
console.log(`like Pizza : `, pizzaLike);
// use let & const 

// arrays => let us store values in single variable 

let array = ["animesh", "kakoty"]
console.log(array[0]); // animesh
console.log(array[1]); // kakoty
console.log(array[2]); // undefined


let ageTwo = 19 

let canVote = (ageTwo > 18) // condition
console.log(canVote); // true

ageTwo = 15
canVote = (ageTwo > 18)
console.log(canVote); // false

// function => helper {u are supposed to do} => dont have to update canVote everytime

function greet(name) {
    return `hello : ${name}`
}
console.log(greet("ani"));
console.log(greet("harkirat"));
console.log(greet("raman"));

function sum(a, b) {
    return a + b
}

console.log(sum(69, 23)); // 92
console.log(sum(1, 2));
console.log(sum(1, "ana")); // this is what dynamically typed or loosely ti


// Write a function called canVote that returns true or false if the age of a user is > 18

function canVoteNew(age) {
    return age > 18
}

console.log(canVoteNew(19)); // true 
console.log(canVoteNew(14)); // false


/*
    Write an if/else statement that checks if a number is even or odd.
    If it's even, print "The number is even." Otherwise, print "The number is odd."
*/

function ifElse(num) {
    if (num % 2 === 0) {
        return ` the number is even`
    } else {
        return ` the number is odd`
    }
}


console.log(ifElse(4));
console.log(ifElse(5));

// loops => for while 

let users = ["animesh", "harkirat", "kakoty"]

for (let i = 0; i < users.length; i++) {  
    console.log(users[i]);
    
}

function forLoop(num) {
    let sum = 0
    for(let i = 1; i <= num; i++){
       sum += i
    }
    return sum
}
console.log(forLoop(3));

// complex types in JS

// object => collection of key value pairs 

const user1 = {
    name: "animesh",
    age: 21,
    gender: "male"
}

console.log(`user name is `, user1.name);
console.log(`user age is `, user1.age);


function userGreet(user) {
    return "hii your name is " + user.name + "and your age is", + user.age;

}

console.log(userGreet(user1));


/*
    Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

*/


function greetNew(user) {
    if (user.gender === "male") {
        return `hi Mr. ${user.name} your age is ${user.age}`
    } else {
        return `hi Ms. ${user.name} your age is ${user.age}`
        
    }
}


const user2 = {
    name : "mahila", 
    age: 21,
    gender: "female"
}

console.log(greetNew(user1));
console.log(greetNew(user2));


// array of object => nested nested

/*
 create a function that takes an array of object as input 
 return male users whose age > 18
*/


const usersAss = [
    {
        name: "animesh",
        age: 21,
        gender: "male"
    },
    {
        name: "priya", 
        age: 12,
        gender: "female"
    },
    {
        name: "harkirat", 
        age: 19,
        gender: "male"
    }
]

console.log(usersAss[0].age);


function returnUsers(user) {
    let arr = []
    for (let i = 0; i < user.length; i++) {
        if(user[i].gender === "male" && user[i].age > 18){
            arr.push(user[i])
        }  
    }
    return arr
    // use filter, map, reduce 
    // return user.map(users => )
}

console.log(returnUsers(usersAss));


function mapUse(user) {
    return user.filter(users => users.age > 18 && users.gender === "male")
}

console.log(mapUse(usersAss));
