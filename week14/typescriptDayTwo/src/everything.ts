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
