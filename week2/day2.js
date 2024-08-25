
/* doing everything by reading */

const { time } = require("console");

/*
=> class{ blueprint } object => predefined properties or methods 

=> object {} => doesnt have predefined pros or methods



=> 
 
 */



    class Rectangle {
        constructor(width, height, color){
            this._width = width
            this._height = height
            this._color = color
        }
    
        get area(){
            // by writing get => while calling this method we dont have to write area() => simply write varibaleName.area 
            return this._width * this._height
            
        }
    
        set width(newwidth){
            if(newwidth < 10){
                console.log(`give something that is greater than 10`);
                
            } else {
                this._width = newwidth
            }
        }
    
        get width(){
            return `the new width is ${this._width}`
        }
    } 
    
    const rect = new Rectangle(12, 22, "red")
    
    console.log(rect.area);
    
    rect.width = 33
    
    console.log(rect.width);
    console.log(rect.area);
    
    
    rect.width = 2
    
    
    
    //=> we can extend any class to other class => a class can take any method or props from other class also. => "extends" word use here and we get excess to all the props and methods of parent class
    
    class shape{
        constructor(color){
            this.color = color
        }
    
        paint(){
            console.log(`painting with color ${this.color}`);
        } 
    }
    
    
    // let's inherit the above pros to new class 
    
    class RectangleNew extends shape{
        constructor(height, width, color){
            super(color)
            this.height = height
            this.width = width
        }
    
        area(){
            return this.height * this.width
        }
    
        getDescription(){
            return `a rectangle with height ${this.height} and width ${this.width} and color ${this.color}`
        }
    }
    
    class circle extends shape{
        constructor(radius, color){
            super(color) 
            this.radius = radius
        }
    
        area(){
            return Math.PI * this.radius * this.radius
        }
    
        getDescription(){
            return `the circle has radius of ${this.radius} and color ${this.color}`
        }
    }
    
    const newCir = new circle(29, "red")
    console.log(newCir.getDescription());
    console.log(newCir.area());
    
    const newRect = new RectangleNew(10, 20, "pink")
    console.log(newRect.area());
    console.log(newRect.getDescription());
    // excess the method of paint class 
    newCir.paint() 
    newRect.paint()
    
    // some js own class => Date(), Map()
    
    console.log(Date());
    
    const date = new Date()
    console.log(date.toDateString());
    console.log(date.toTimeString());
    // the toDateString(), toJSON() etc are known as formatter in js and there are many more other class also. google it 
    
    
    
    // map class 
    
    const users = new Map()
    
    users.set(`name`, "animesh")
    users.set(`age`, 21)
    
    console.log(users.get("name"));
    console.log(users.has("age")); // has used to check for keys not for values
    
    let valuesArray = []
    valuesArray.push(...users.values())
    console.log(valuesArray);
    console.log(valuesArray.includes(21));
    
    let keys = []
    keys.push(...users.keys())
    console.log(keys);
    console.log(keys.includes("name"));
    console.log(keys.includes("sirname"));
    
    // promise  => to hgandle async ops like db calls , i/o ops, api calls, timers. Its an object that returns us eventual completion or eventual failure of any async ops 
     
    // new Promise((res, rej) => {
    //     res("one")
        
    // })
    // .then(resp => console.log(resp))
    // .catch(err => console.log(err))
    // .finally( () => console.log("finally"))
    
    

function promisefN(time){
    return new Promise(res => setTimeout(res, time))
}

promisefN(3000).then(() => {
    console.log(`3 sec passed `)
    
})


new Promise((res, rej) => {
    setTimeout(res, 3000)
})
.then(() => {
    setTimeout(() => {
        console.log(`set`);
        
    }, 2000);
    console.log(`bla bla`);
    
})
// so what we write inside .then() => related to res and vice versa 

setTimeout(() => {
    console.log("hii");
    setTimeout(() => {
        console.log(`hello`);
    }, 3000);
    setTimeout(() => {
        console.log(`hello there`);
    }, 5000);
}, 1000);

// this is call back hell to avoid this we use async await 
// the async await syntax helps us to write asynchronous code in a sync way and the code behaves also like that
// this things builds on top of promise and we don't have to use .then()/ .catch() => syntactic sugar on top of Promises

function setTimeoutPromisified(time){
    return new Promise(res => setTimeout(res, time))
}

async function solve() {
    await setTimeoutPromisified(6000)
    console.log("new");
    await setTimeoutPromisified(7000)
    console.log("new2");
    await setTimeoutPromisified(8000)
    console.log("newewhi there");
}

solve()

// my own async await
const fs = require("fs")
const { readFile } = require("fs/promises")

const readFILE = (filename) => {
    return new Promise((res, rej) => {
        fs.readFile(filename, "utf-8", (err, data) =>{
            if(err){
                rej(`there is a error ${err}`)
            } else {
                res(data.trim())
            }
        })
    })
}

async function filedata(filenam) {
    try {
        const dataFromFile =  await readFILE(filenam)
        console.log(dataFromFile);
         
    } catch (error) {
        console.log(error);
        
    }
    
}

// filedata("a.txt")
// filedata("b.txt")


async function fileReader(filepath) {
    try {
        const data = await new Promise((res, rej) => {
            fs.readFile(filepath, "utf-8", (err, wrtings) => {
                if(err) rej(err)
                else res(wrtings.trim())
            })
        })
        console.log(data);
        
        
    } catch (error) {
        console.log(error);
        
    } 
}


// fileReader("a.txt")
fileReader("b.txt")


async function fileReader(filepath) {
    try {
        const data = await (function name(){
            return new Promise((res, rej) => {
                fs.readFile(filepath, "utf-8", (err, data) => {
                    if(err) rej(err)
                    else res(data)
                })
            })
        })() 
        // invoking immediately 
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    } 
}


fileReader("asd.txt")
fileReader("b.txt")

// the code from 245 and code from 267 are same => in 247 we use iife but in 245 we write directily promise after await 


