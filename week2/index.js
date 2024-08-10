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


// cpu bound tasks => usage of cpu happens {limited by cpu power} => for loop 
 

// input output heavy operations => ops that are happens when we give input something and get output something 
// readfile is a i/o , waiting for some time and HTTP request 
//  settimeout also i/o
// read a file code => fs{file system} is a external file that read a file 
// fs => Read files Create files,  Update files.  Delete files, Rename files => google it 
// fs gives two function => readFile and readFileSync : google it
 
const fs = require("fs");
const { callbackify } = require("util");
// const { resolve } = require("path");

const contents = fs.readFileSync("a.txt", "utf-8") 
console.log(contents);
const contentsNew = fs.readFileSync("b.txt", "utf-8")
console.log(contentsNew);
// the above is a synchronous call => running one by one  => readFileSync is a sync ops 
// here the data is store in varible 

// but readFile is async ops => it has callback which store the data after reading it
// use readFile to run asynchronously 

fs.readFile("a.txt", "utf-8", (err, contents) =>{
    console.log(contents);
})

// let's write in a understandable way

function callbackfunction(err, readData){
    if(err){
        console.log(err);
    } else {
        console.log(readData);
        
    }
}
fs.readFile("b.txt", "utf-8", callbackfunction)
// as readFile is a async call => it will go to micro Task queue 
// so the taks that are not in micro or macro will execute first 
// after that readFile run 
// readFileSync can't able to enter microTq


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





const set = (name) => {
    setTimeout(() => {
        console.log(`${name}`);
        
    }, 1000);
}
set("anieh")

setTimeout((para) => {
    console.log(`${para}`);
    
}, 1000, "kaka");






















// try to create promisified version of setTimeout and fetched fs.readFile


function promisified(delay) {
    return  new Promise((resolve, rejects) =>{
        setTimeout(() => {
            resolve
        }, delay)
    })
}