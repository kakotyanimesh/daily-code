const newX: number = 10

// newX = "adads" we cant do this in ts cant assign newX a string value as it's declared type is number
const newName : string = 'animesh'
console.log(newX);
console.log(newName);

// npx tsc -b or simply just use tsc -b to conver the js file to ts file 

const sayHello = (firstname : string) => {
    console.log(`hello ${firstname}`);
}

sayHello("anmasdasd")

const returnType = (a :number, b:number): number => {
    return a + b
}

console.log(returnType(10, 29));

const legality = (age : number)  => {
    if(age > 18) return true
    else return false
}
//  here it explecitely returns us boolean value type inference

console.log(legality(23));
console.log(legality(10));


// for inputs like a function we use void as type with the function syntax : () => void
const inputFunction = () => {
    console.log('hellow after 3 seconds');
    
}

const outerFunction = (fn : () => void) => {
    setTimeout(fn, 1000);
}


outerFunction(inputFunction)

// tsconfig file 
/*
    target option => to which ecma script version you want your typescript code to convert , es2016 or 2022
    outDir => asked for the src of the folder where we want to store our converted js files
    rootDir => it also asked for the src of the folder where our ts files are stored
    noImplicitAny => type ssafety checker on any type
    removeComments => true => no comments on js file , if false => commnets in js file and default is false  
*/

// interfaces in typescript => type to object 

// One way to give type to an object is by making object of type and give to the input as shown below 

const sayMyName = (user : {
    name : string,
    age : number
}) => {
    console.log(user.name);
    
}

sayMyName({
    name : "Xvi",
    age : 21
})

// but in this way there are to many objects are created => unreadble and the solution is ====INTERFACE====
// its lets us to create the type of object in differently and we can use it after wards

interface UserInterface {
    name : string,
    age : number
}
// we just decalre the type of object in a differnt syntax or code idk the name


const interfaceName = (user: UserInterface) => {
    console.log(user.name + "age is " + user.age);
}

interfaceName({name : "realMadrid", age : 21})


const canVote = (obj : UserInterface) : boolean => {
    return obj.age > 18 ? true : false
}

console.log(canVote({
    name : "asdadad", 
    age : 23
}));


console.log(canVote({
    name : "asdadad", 
    age : 10
}));

// implement interface 

interface Person {
    name : string,
    age : number,
    greetFn(phrase: string) : void
    //  functions type => void
}

class Employee implements Person {
    name : string
    age : number

    constructor(s : string, a : number) {
        this.name = s,
        this.age = a
    }

    greetFn(phrase: string): void {
        console.log(phrase + this.name);
        
    }
}


const newEmployeee = new Employee('jaciii', 21)
newEmployeee.greetFn('asdad')


// we have type in TS that is same as interface => help to create type for non-premitive ds ( array object) which give more features then interface

// Union => we can assign two or more data type to a varible eg : id 

type UserTypes = {
    name : string,
    id : string | number 
} 

const printId = (employeeObj : UserTypes) => {
    console.log(employeeObj.id + " is the id of the employee");
}

printId({name : "harkirat", id : 12})
printId({name : "harkirat", id : "adadad"})

// intersection => we need both property from different types

type Intern = {
    name : string,
    startDate : Date
}

type Manager = {
    name : string,
    department : string
}

// creating a new type of object that has both the type from Intern and Mananger

type TeamLead = Intern & Manager

const intersectedType: TeamLead = {
    name : "TONI CROSS",
    // startDate : new Date().toLocaleString(), => we can if we define date as string in the Intern type 
    startDate : new Date(),
    department : "Football"
}

console.log(intersectedType.name);
console.log(intersectedType.department);
console.log(intersectedType.startDate);
