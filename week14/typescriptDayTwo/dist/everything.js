"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    firstName: "Animesh",
    lastName: "Kakoty",
    age: 21,
    address: {
        city: 'karatipar',
        pincode: 121212,
        country: "India"
    }
};
// type sfaety means how we are gonna assign types to non-premitives dT like array => interface
// to give type to function we use : () => void 
const timer = (func) => {
    setTimeout(func, 3000);
};
timer(() => { console.log("aniesh"); });
const newIsLegal = (anObject) => {
    return anObject.age > 18 ? true : false;
};
console.log(newIsLegal(user));
class EmployeeClass {
    constructor(name, date) {
        this.name = name,
            this.date = date;
    }
}
// in the above class imrrepeating the same thing as u can see like name : string is written three times if we add the interface thingy also so to avoid this we use the public/private/ protected keywords in the class
// public means => values can be accessiblle from outside like =-> EmployeeClass.name but in private you cant do that in Protected classes that inherits the props of parent class in our case EmployeeClass can use the name thingy
class EmployeeClassWithPublic {
    constructor(name, date) {
        this.name = name;
        this.date = date;
        this.name = name;
        this.date = date;
    }
}
const myEmployee = new EmployeeClassWithPublic("animesh", new Date("11-10-2024"));
// to pass date in date Type we have to initialize first Date object inside it we have to pass the date in string format 
console.log(myEmployee.date);
console.log(myEmployee.name);
class UniversityStudent {
    constructor(name, department, hostel, roomNo) {
        this.name = name;
        this.department = department;
        this.hostel = hostel;
        this.roomNo = roomNo;
        this.name = name,
            this.department = department;
        this.hostel = hostel;
        this.roomNo = roomNo;
    }
}
const newStudent = new UniversityStudent("animesh", 'physics', "CMh", 112);
console.log(newStudent);
console.log(newStudent.name);
console.log(newStudent.department);
const isAStudent = (name, studentObject) => {
    // if(name === newStudent.name) {
    //     return `${name} is one of our Student`
    // } else return `nah he is not our student`
    return name === studentObject.name ? `yes ${name}  is our student` : `nah ${name}  isnot our student`;
};
console.log(isAStudent("animesh", newStudent));
console.log(isAStudent("asdadasd", newStudent));
console.log(isAStudent("animes]]hasdasd", newStudent));
class UniversityStudentWithType {
    constructor(name, department, rollNo) {
        this.name = name;
        this.department = department;
        this.rollNo = rollNo;
        this.name = name;
        this.department = department;
        this.rollNo = rollNo;
    }
}
const againAnotherStudent = new UniversityStudentWithType("anmesh", "physc", 1212);
console.log(againAnotherStudent.name);
const newfunction = (name, studentObject) => {
    return name === studentObject.name ? true : false;
};
console.log(newfunction("anmesh", againAnotherStudent));
console.log(newfunction("anmesadadh", againAnotherStudent));
console.log(newfunction("anmeshasdasd", againAnotherStudent));
const P1 = { x: 12, y: 12 };
// const P2 : Point2d = { x : 12, y : 34, name : "adada"}  this gives error but there's a way
const eascapeError = { x: 12, y: 12, name: "animesh", age: 23 };
const P3 = eascapeError; // now no error as the point2d can take anything but x and y : number have to be present 
// no literal object without both x and y cant be part of Point2d
const withoutXandY = { x: 12, name: "adadads" };
const np1 = {
    name: "asdadasd",
    x: 21,
    y: 21
};
const personName = {
    name: "asdadas"
};
const newObject = {
    x: 21,
    y: 1212
};
const bothObject = {
    name: "Asdasdas",
    y: 12,
    x: 12
};
console.log(bothObject);
// const jibrich = {x : 12, y : 12, sirname : "adsadasd"}
// const jibrichType : BothNameEntityOrPoint2d = jibrich
// Arrays in Typescript [] add at last 
const findMax = (arr) => {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};
console.log(findMax([12, 34, 45, 9]));
const findMaxSort = (arr) => {
    const sortedArray = arr.sort((a, b) => a - b);
    console.log(sortedArray);
    const maxNumber = sortedArray[sortedArray.length - 1];
    return maxNumber;
};
console.log(findMaxSort([1, 10, 20, 6]));
const filteredUser = (user) => {
    return user.filter(x => x.age >= 18);
};
console.log(filteredUser([
    { name: "asdasdas", age: 23 },
    { name: "asdasdas", age: 18 },
    { name: "asdasdas", age: 5 },
    { name: "asdasdas", age: 10 },
]));
// enums in typescript lets us to create Human readable to readble contasnt values , lets say we have a game pressing up down left right and you have to do something for that how we are going to store the type of key press ? is it string or number here comes the enums , basically when we have a fixed set of data set and we dont want to assign arbitary number or string as type to them we use enum 
var KeyPressed;
(function (KeyPressed) {
    KeyPressed[KeyPressed["up"] = 0] = "up";
    KeyPressed[KeyPressed["down"] = 1] = "down";
    KeyPressed[KeyPressed["left"] = 2] = "left";
    KeyPressed[KeyPressed["right"] = 3] = "right";
})(KeyPressed || (KeyPressed = {}));
const doSomething = (pressedKey) => {
    if (pressedKey === KeyPressed.up) {
        return "up returned";
    }
    else
        return "null";
};
console.log(doSomething(KeyPressed.up));
console.log(doSomething(KeyPressed.down));
console.log(KeyPressed.up); // 0 
console.log(KeyPressed.down); // 1 
console.log(KeyPressed.right); // 3
console.log(KeyPressed.left); // 2
//  the value during runtime for up down left right is 0, 1, 2, 3, 4 => the default one but we can also assign them values both string and number , for number if we give first element 5 then second will be 6 , then 7 so on so forth 
var AssignValues;
(function (AssignValues) {
    AssignValues[AssignValues["left"] = 0] = "left";
    AssignValues[AssignValues["right"] = 1] = "right";
    AssignValues[AssignValues["up"] = 10] = "up";
    AssignValues[AssignValues["down"] = 11] = "down";
})(AssignValues || (AssignValues = {}));
//  if i give left as 10 the left over will  be 11, 12, 13 but if i give up as 10 , the left =1 , right = 1 but up will be 10 and down will be 11 
console.log(AssignValues.left); // 0 if no given value assigned they will start from 0 
console.log(AssignValues.right); // becomes 1 by default
console.log(AssignValues.up); // 10 deafult 
console.log(AssignValues.down); // 11 as upper element is 10
//  string  assign 
var StringAssigned;
(function (StringAssigned) {
    StringAssigned["up"] = "up";
    StringAssigned["down"] = "its down";
    // left , if we give value to every other keys then in the middle we cant left one another for string . but in case of number we can , CASE => THE FIRST ELEMENT CAN HAVE No initialized value
    StringAssigned["left"] = "you cant left me";
    StringAssigned["right"] = "its right";
})(StringAssigned || (StringAssigned = {}));
console.log(StringAssigned.up); // if we dont give value it will be 0 
console.log(StringAssigned.down);
console.log(StringAssigned.left);
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["Success"] = 200] = "Success";
    ResponseStatus[ResponseStatus["NotFound"] = 404] = "NotFound";
    ResponseStatus[ResponseStatus["Error"] = 500] = "Error";
})(ResponseStatus || (ResponseStatus = {}));
// express useCase 
// app.get('/', (req, res) => {
//     res.status(ResponseStatus.Success).json({
//         msg : 'in express we can predefined the status codes inside an enum thingy '
//     })
// })
// Generics <Type> => we need reusable things as we dont want to repeat our code
const returnArg = (num) => {
    return num;
};
const returnArgNew = (str) => {
    return str;
};
console.log(returnArg(12));
console.log(returnArgNew("animesh"));
// here we are repeating the function because we have to explicitely have to provide the type but what if we can make the type like input thingy just have to pass when we call the function
console.log("generics in TYPESCRIPT");
const genericFunction = (input) => {
    return input;
};
console.log(genericFunction("animesh"));
console.log(genericFunction(12));
console.log(genericFunction(false));
function genericFunctionNew(input) {
    return input;
}
console.log(genericFunction(12));
console.log(genericFunction("kakoty"));
console.log(genericFunction(false));
const dayThree_1 = require("./dayThree");
console.log((0, dayThree_1.genericsNumber)(["generic mI,NER", "EFSFDSDF"]));
