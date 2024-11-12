const user : UserType = {
    firstName : "Animesh",
    lastName : "Kakoty",
    age : 21,
    address : {
        city: 'karatipar',
        pincode : 121212,
        country : "India"
    }
}
// type sfaety means how we are gonna assign types to non-premitives dT like array => interface

// to give type to function we use : () => void 


const timer = (func : () => void) => {
    setTimeout(func, 3000);
}

timer(() => {console.log("aniesh")})


interface UserType {
    firstName : string,
    lastName : string,
    age : number,
    address : {
        city : string,
        pincode : number,
        country : string
    }
}


const newIsLegal = (anObject : UserType ) : boolean => {
    return anObject.age > 18 ? true : false
}

console.log(newIsLegal(user));

// implementing interface in class
/*
    classes are bluePrint to create Object in Js we have this in TS also it has its own syntax lets do it
    
*/

// interface for Employee class

interface PersonInterface {
    name : string
    date : Date
}

class EmployeeClass implements PersonInterface {
    name :string
    date : Date
    
    constructor(name : string, date : Date) {
        this.name = name,
        this.date = date
    }
}
// in the above class imrrepeating the same thing as u can see like name : string is written three times if we add the interface thingy also so to avoid this we use the public/private/ protected keywords in the class

// public means => values can be accessiblle from outside like =-> EmployeeClass.name but in private you cant do that in Protected classes that inherits the props of parent class in our case EmployeeClass can use the name thingy

class EmployeeClassWithPublic implements PersonInterface {
    constructor(public name : string, public date : Date) {
        
        this.name = name 
        this.date = date
    }
}

const myEmployee = new EmployeeClassWithPublic("animesh", new Date("11-10-2024"))
// to pass date in date Type we have to initialize first Date object inside it we have to pass the date in string format 
console.log(myEmployee.date);
console.log(myEmployee.name);

interface Student {
    name : string,
    department : string,
    hostel : string,
    roomNo : number,
}


class UniversityStudent implements Student {
    constructor(public name : string, public department : string, public hostel : string, public roomNo : number){
        this.name = name ,
        this.department = department
        this.hostel = hostel
        this.roomNo = roomNo
    }

}

const newStudent = new UniversityStudent("animesh", 'physics', "CMh", 112)

console.log(newStudent);
console.log(newStudent.name);
console.log(newStudent.department);

const isAStudent = (name : string, studentObject : Student): string => {
    // if(name === newStudent.name) {
    //     return `${name} is one of our Student`
    // } else return `nah he is not our student`

    return name === studentObject.name ? `yes ${name}  is our student` : `nah ${name}  isnot our student`
}

console.log(isAStudent("animesh", newStudent));
console.log(isAStudent("asdadasd", newStudent));
console.log(isAStudent("animes]]hasdasd", newStudent));


// its time for types (with =) => same as interfaces that helps to aggregate data together or define type to non-primitive data types

type StudentType = {
    name : string,
    department : string,
    rollNo : number
}

class UniversityStudentWithType implements StudentType {
    constructor(public name : string, public department : string, public rollNo : number){
        this.name = name
        this.department = department
        this.rollNo = rollNo
    }
}

const againAnotherStudent = new UniversityStudentWithType("anmesh", "physc", 1212)

console.log(againAnotherStudent.name);

const newfunction = (name : string, studentObject : StudentType) : boolean => {
    return name === studentObject.name ? true : false
}


console.log(newfunction("anmesh", againAnotherStudent));
console.log(newfunction("anmesadadh", againAnotherStudent));
console.log(newfunction("anmeshasdasd", againAnotherStudent));

// we can do many other things in types basically the union and inserction thingy that cant be done a single interface but the intersection and union of interface can be done in type  


interface Point2d {
    x : number ,
    y : number
}

const P1 : Point2d = {x : 12, y : 12}
// const P2 : Point2d = { x : 12, y : 34, name : "adada"}  this gives error but there's a way
const eascapeError = { x : 12, y :12 , name : "animesh", age : 23}

const P3 : Point2d = eascapeError // now no error as the point2d can take anything but x and y : number have to be present 

// no literal object without both x and y cant be part of Point2d
const withoutXandY = {x : 12, name : "adadads"}
// const P4 : Point2d = withoutXandY error from TS

// intersection & 

interface NameEntity {
    name : string
}

type NameAndPoint2d = Point2d & NameEntity // an intersection of both interfaces 

const np1 : NameAndPoint2d = {
    name : "asdadasd",
    x : 21,
    y : 21
}

// the above thing is what intersection gives us as in some corner of Point2d interface there will be an a subset of values with property name of type string and in some corner of NameEntity interface there will be a subset that has property of x and y with type number as types in TypeScript is open 

// const np2 : NameAndPoint2d = {
//     x :21,
//     name : "asdasdad"
// } => we cant write this 

// the above thingy is impossible as the y value is missing      

// type A = numeber & string => this is impossible as we cant define a set that has type of number and string for the same property means in the number universe we cant find a number that has string value similarly in the string universe we cant find a string that has number value 

// UNION | here the subset will be have both properties / domain of one interface except other or vice-versa and both together
//  in union an object must satisfy atleast one of the types in union , extras are allowed if i fullfills the minimum requirement 


type BothNameEntityOrPoint2d =  NameEntity | Point2d


const personName : BothNameEntityOrPoint2d = {
    name : "asdadas"
}

const newObject : BothNameEntityOrPoint2d = {
    x : 21,
    y : 1212
}


const bothObject : BothNameEntityOrPoint2d = {
    name : "Asdasdas",
    y : 12,
}

console.log(bothObject);



// const jibrich = {x : 12, y : 12, sirname : "adsadasd"}


// const jibrichType : BothNameEntityOrPoint2d = jibrich


// Arrays in Typescript [] add at last 

const findMax = (arr : number[]) => {
    let max = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}


console.log(findMax([12, 34, 45, 9]));

const findMaxSort = (arr : number[]): number => {
    const sortedArray : number[] = arr.sort((a, b) => a - b )
    console.log(sortedArray);
    

    const maxNumber : number = sortedArray[sortedArray.length - 1]

    return maxNumber
}

console.log(findMaxSort([1, 10, 20, 6]));

interface Users {
    name : string,
    age : number
}

const filteredUser = (user : Users[]) => {
    return user.filter(x => x.age >= 18)
}

console.log(filteredUser([
    {name : "asdasdas", age : 23},
    {name : "asdasdas", age : 18},
    {name : "asdasdas", age : 5},
    {name : "asdasdas", age : 10},
]));

// enums in typescript lets us to create Human readable to readble contasnt values , lets say we have a game pressing up down left right and you have to do something for that how we are going to store the type of key press ? is it string or number here comes the enums , basically when we have a fixed set of data set and we dont want to assign arbitary number or string as type to them we use enum 

enum KeyPressed {
    up,
    down,
    left,
    right
}

const doSomething = (pressedKey :  KeyPressed) : string => {
    if(pressedKey === KeyPressed.up) {
        return "up returned"
    } else return "null"
}

console.log(doSomething(KeyPressed.up));
console.log(doSomething(KeyPressed.down));
console.log(KeyPressed.up);  // 0 
console.log(KeyPressed.down); // 1 
console.log(KeyPressed.right); // 3
console.log(KeyPressed.left); // 2

//  the value during runtime for up down left right is 0, 1, 2, 3, 4 => the default one but we can also assign them values both string and number , for number if we give first element 5 then second will be 6 , then 7 so on so forth 


enum AssignValues {
    left,
    right,
    up = 10,
    down
}

//  if i give left as 10 the left over will  be 11, 12, 13 but if i give up as 10 , the left =1 , right = 1 but up will be 10 and down will be 11 
console.log(AssignValues.left);  // 0 if no given value assigned they will start from 0 
console.log(AssignValues.right); // becomes 1 by default
console.log(AssignValues.up); // 10 deafult 
console.log(AssignValues.down); // 11 as upper element is 10



//  string  assign 

enum StringAssigned {
    up = 'up' ,
    down = 'its down',
    // left , if we give value to every other keys then in the middle we cant left one another for string . but in case of number we can , CASE => THE FIRST ELEMENT CAN HAVE No initialized value
    left = "you cant left me",
    right = 'its right'
}

console.log(StringAssigned.up); // if we dont give value it will be 0 
console.log(StringAssigned.down);
console.log(StringAssigned.left);

enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

// express useCase 
// app.get('/', (req, res) => {
//     res.status(ResponseStatus.Success).json({
//         msg : 'in express we can predefined the status codes inside an enum thingy '
//     })
// })



// Generics <Type> => we need reusable things as we dont want to repeat our code

const returnArg = (num : number) :number => {
    return num
}
const returnArgNew = (str : string ): string => {
    return str
}
console.log(returnArg(12));

console.log(returnArgNew("animesh"));

// here we are repeating the function because we have to explicitely have to provide the type but what if we can make the type like input thingy just have to pass when we call the function

console.log("generics in TYPESCRIPT");

const genericFunction = <t>(input : t) : t => {
    return input
}

console.log(genericFunction<string>("animesh"));
console.log(genericFunction<number>(12));
console.log(genericFunction<boolean>(false));



function genericFunctionNew<t>(input: t) : t {
    return input 
}

console.log(genericFunction<number>(12));
console.log(genericFunction<string>("kakoty"));
console.log(genericFunction<boolean>(false));

import { genericsNumber } from "./dayThree";

console.log(genericsNumber<string>(["generic mI,NER", "EFSFDSDF"]));

