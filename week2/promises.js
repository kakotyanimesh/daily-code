// // in js classes are blue prints for creating object 

const { setTimeout } = require("timers/promises");

const { time } = require("console");
const { resolve } = require("path");


class Rectangle {
    constructor(height, width, color){
        this.height = height
        this.width = width
        this.color = color
    }

    area(){
        return this.height * this.width
        
        
    }

    print(){
        console.log(`print with the color ${this.color}`); 
    }
}

const rect = new Rectangle(2, 4, "red")
const area = rect.area()
console.log(area);
rect.print()


// date 
const date = new Date() // the js's own date class
console.log(date.toTimeString());
console.log(date.toISOString());
console.log(date.toLocaleString());


// map class => create key value pair

const object = new Map()
object.set("name", "animesh")
object.set(`age`, 21)
console.log(`map class is`, object);
console.log(object.get("name")); // getting information from the new object that is created with map class
console.log(object.get(`age`));


// promise class 
function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}


// function callBack() {
//     console.log("promises are easy");
    
// }

setTimeoutPromisified(5000)
.then(() => console.log("promise are easy"))


function promiseCall(resolve){
    setTimeout(resolve, 3000)
}

promiseCall(() => console.log("hi")
)

// promisified version => add .then() xdxdxd

function raddom() {

}
let p = new Promise(raddom)
console.log(p);


// create promisified of fs.readFile , cleanFile , fs.writefILE

const fs = require("fs")

const promisifiedFS = new Promise((resolve, reject) => {
    resolve(read)
})

function read(file){
    fs.readFile("a.txt", "utf-8", (err, contents) =>{
        console.log(contents);
    })
}

promisifiedFS.then(read())


fs.readFile("ba.txt", "utf-8", (error, data) => {
    if(error){
        console.log(`error is ${error}`)
    } else {
        console.log(data)
    }
})



  





// lets write it in again 


