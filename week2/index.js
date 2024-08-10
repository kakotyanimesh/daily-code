function sum(a, b){
    return  parseInt(a) + parseInt(b)
}
console.log(sum("2", 3));
// using pareInt to change string to number

function sumN(n) {
    let ans = 0
// cpu bound task
    for(let i = 0; i <= n; i++){
        ans += i
    }
    return ans
    
}


console.log(sumN(3));

const { rejects } = require("assert");
const { log } = require("console");





// input output heavy operations 
// readfile is a i/o , waiting for some time and HTTP request 
//  settimeout also i/o
// read a file code => fs{file system} is a external file that read a file 
// fs gives two function => readFile and readFileSync : google it

const fs = require("fs");
// const { resolve } = require("path");

const contents = fs.readFileSync("a.txt", "utf-8") // this is a synchronous call => running one by one
console.log(contents);

const contentsNew = fs.readFileSync("b.txt", "utf-8")

console.log(contentsNew);

// use readFile to run asynchronously 

fs.readFile("a.txt", "utf-8", (err, contents) =>{
    console.log(contents);
})

fs.readFile("aaa.txt", "utf-8", (err, data) =>{
    if(err){
        console.log("file not found");
        
    } else {
        console.log(data);
        
    }
})



// Functional arguments => passing a function a as an argument to another function

function sum(a, b) {
    return a + b
}
function subs(a, b) {
    return a - b
}
function divide(a, b) {
    return a  / b
}
function multtiply(a, b) {
    return a * b
}

function doOps(a, b, operations) {
    return operations(a, b)
}

console.log(doOps(2, 4, sum));
console.log(doOps(2, 4, multtiply)); 
// it takes function as an arguments 
// see in the console the fs.readFile is print after this runnig the doOps as fs.readFile => async function


























// try to create promisified version of setTimeout and fetched fs.readFile


function promisified(delay) {
    return  new Promise((resolve, rejects) =>{
        setTimeout(() => {
            resolve
        }, delay)
    })
}