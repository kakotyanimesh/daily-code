// // in js classes are blue prints for creating object 

// const { time } = require("console");
// const { resolve } = require("path");


// class Rectangle {
//     constructor(height, width, color){
//         this.height = height
//         this.width = width
//         this.color = color
//     }

//     area(){
//         return this.height * this.width
        
        
//     }

//     print(){
//         console.log(`print with the color ${this.color}`); 
//     }
// }

// const rect = new Rectangle(2, 4, "red")
// const area = rect.area()
// console.log(area);
// rect.print()


// // date 
// const date = new Date() // the js's own date class
// console.log(date.toTimeString());
// console.log(date.toISOString());
// console.log(date.toLocaleString());


// // map class => create key value pair

// const object = new Map()
// object.set("name", "animesh")
// object.set(`age`, 21)
// console.log(`map class is`, object);
// console.log(object.get("name")); // getting information from the new object that is created with map class
// console.log(object.get(`age`));


// // promise class 
// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve, ms))
// }


// // function callBack() {
// //     console.log("promises are easy");
    
// // }

// setTimeoutPromisified(5000)
// .then(() => console.log("promise are easy"))


// function promiseCall(resolve){
//     setTimeout(resolve, 3000)
// }

// promiseCall(() => console.log("hi")
// )

// // promisified version => add .then() xdxdxd

// function raddom() {

// }
// let p = new Promise(raddom)
// console.log(p);


// // create promisified of fs.readFile , cleanFile , fs.writefILE

// const fs = require("fs")

// const promisifiedFS = new Promise((resolve, reject) => {
//     resolve(read)
// })

// function read(file){
//     fs.readFile("a.txt", "utf-8", (err, contents) =>{
//         console.log(contents);
//     })
// }

// promisifiedFS.then(read())


// fs.readFile("ba.txt", "utf-8", (error, data) => {
//     if(error){
//         console.log(`error is ${error}`)
//     } else {
//         console.log(data)
//     }
// })

/* doing everything by reading */

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








