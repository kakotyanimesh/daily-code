"use strict";
const newX = 10;
// newX = "adads" we cant do this in ts cant assign newX a string value as it's declared type is number
const newName = 'animesh';
console.log(newX);
console.log(newName);
// npx tsc -b or simply just use tsc -b to conver the js file to ts file 
const sayHello = (firstname) => {
    console.log(`hello ${firstname}`);
};
sayHello("anmasdasd");
const returnType = (a, b) => {
    return a + b;
};
console.log(returnType(10, 29));
const legality = (age) => {
    if (age > 18)
        return true;
    else
        return false;
};
//  here it explecitely returns us boolean value type inference
console.log(legality(23));
console.log(legality(10));
// for inputs like a function we use void as type with the function syntax : () => void
const inputFunction = () => {
    console.log('hellow after 3 seconds');
};
const outerFunction = (fn) => {
    setTimeout(fn, 1000);
};
outerFunction(inputFunction);
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
const sayMyName = (user) => {
    console.log(user.name);
};
sayMyName({
    name: "Xvi",
    age: 21
});
// we just decalre the type of object in a differnt syntax or code idk the name
const interfaceName = (user) => {
    console.log(user.name + "age is " + user.age);
};
interfaceName({ name: "realMadrid", age: 21 });
const canVote = (obj) => {
    return obj.age > 18 ? true : false;
};
console.log(canVote({
    name: "asdadad",
    age: 23
}));
console.log(canVote({
    name: "asdadad",
    age: 10
}));
class Employee {
    name;
    age;
    constructor(s, a) {
        this.name = s,
            this.age = a;
    }
    greetFn(phrase) {
        console.log(phrase + this.name);
    }
}
const newEmployeee = new Employee('jaciii', 21);
newEmployeee.greetFn('asdad');
const printId = (employeeObj) => {
    console.log(employeeObj.id + " is the id of the employee");
};
printId({ name: "harkirat", id: 12 });
printId({ name: "harkirat", id: "adadad" });
const intersectedType = {
    name: "TONI CROSS",
    startDate: new Date(),
    department: "Football"
};
console.log(intersectedType.name);
console.log(intersectedType.department);
console.log(intersectedType.startDate);
