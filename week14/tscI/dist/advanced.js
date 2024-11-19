"use strict";
// making an array of number by adding [] after number word
const arrayInput = (input) => {
    return input[0];
};
console.log(arrayInput([1, 2, 3,]));
console.log(arrayInput(["adadad", "adadad", "12as"]));
//  in the above code the problem is the giving both string or number to input also returns us both string and number as type of output we want the ts to figure out if we give string as input it has to return the string or for number it has to return number 
// in above if we try to use the toLowerCase() it wont work as ts cant figure out in which the toLowerCase() has to apply and THE SOLUTION IS <TYPE> GENERICS ( i have always forget about it Its GENERICS)
function getFirstElement(arr) {
    return arr[0];
}
const numberReturn = console.log(getFirstElement([1, 3, 4, 5])); // we can explicitely tell ts by adding <number> after the function call or we can foget about it as ts now smart enough to do it 
const stringReturn = getFirstElement(['adad', "adasdad", "12rasd"]);
console.log(stringReturn.toUpperCase());
console.log(getFirstElement([
    {
        name: "a",
        age: 12
    },
    {
        name: 'adasdasd',
        age: 12
    }
]).age);
// difference b/w types and interfaces
/*
    1. We can implement interface in class but can't implement types in class
    2. types can have union or intersection of interfaces but interfaces cant have union or intersection of types
*/
// classes in typescript
class Vehical {
    constructor(name, model) {
        this.name = name,
            this.model = model;
    }
    startEngine() {
        console.log(`the vehicle with name ${this.name} has model of ${this.model} has stated`);
    }
}
const newVehicle = new Vehical("honda", "223sddfdf"); // creating an instance of vehicle class
newVehicle.startEngine();
// you cant give type to a constructor 
// constructor: string(name : st) => this is wrong
// three important things in ts class => Public , Private and Proctected
class PublicClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name,
            this.age = age;
    }
    getName() {
        console.log(`name is ${this.name} and age is ${this.age}`);
    }
}
const P2 = new PublicClass("P1", 21);
P2.getName();
console.log(P2.name); // here i can also access the name 
console.log(P2.age);
//  BUT WE CANT DO IT IN PRIVATE I GUESS
class PrivateClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name,
            this.age = age;
    }
    getName() {
        console.log(`name is ${this.name} and age is ${this.age}`);
    }
}
const P3 = new PrivateClass("P1", 21);
P3.getName();
// console.log(P3.name); or console.log(P3.age); we cant access to the name and age property of P3 which is an instance of Private class 
//  the same thing hapens in protected class but in protected class we can access it in subclass also 
class ProctectedClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name,
            this.age = age;
    }
    getName() {
        console.log(`name is ${this.name} and age is ${this.age}`);
    }
}
const P1 = new ProctectedClass("P1", 21);
P1.getName();
// console.log(P1.name);  this is unaccecptable 
//  but we can access it in subclass that extends the protected class
class subclass extends ProctectedClass {
    showNAME() {
        console.log(`name ${this.name} and age is ${this.age}`);
    }
}
// above example name and age is accessible from outside the class also 
const subClassP1 = new subclass('anads', 21);
subClassP1.showNAME();
// class tsClass {
//     name : string
//     constructor(name : string) {
//         this.name = name
//     }
// }
class tsClassPublic {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
const publicOne = new tsClassPublic("animes");
console.log(publicOne.name);
// "animes" is going to print 
class protectedClass {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
const protecteddd = new protectedClass("asdad");
//protecteddd.name no accessible 
class subclassdsd extends protectedClass {
    getname() {
        return `${this.name}`;
    }
}
// tsx module can compile ts without turning it into js , it directly runs on node js 
let str = "animesh";
console.log(str.concat("adsads"));
console.log(str.charAt(2));
console.log(str.indexOf('a'));
console.log(str.replace('a', 'b'));
console.log(str.split('m')); // returns us an array of string type type = <string>[]
let strTwo = 'animesh,kakoty,ronaldo';
console.log(strTwo.split(',', 2));
console.log(strTwo.length); // the commas are also count as charter
console.log(strTwo.indexOf(','));
console.log(strTwo.split('o', 2));
console.log(strTwo.toLocaleLowerCase());
console.log(strTwo.toLocaleUpperCase());
console.log(strTwo.toUpperCase());
console.log(strTwo.includes('animesh'));
// declaration of array in ts 
const arrOne = ['animesh', 'kakoty'];
const arrTwo = [12, 13];
const arrThree = ['anime', 'akkt'];
const arrFour = [12, 144];
const arrfive = ['animesh', 144];
const arrsix = ['animesh', 144];
// advanced ts like Pick stc
console.log("advanced Typescript Api");
const sum_Age = (user1, user2) => {
    return user1.age + user2.age;
};
console.log(sum_Age({
    name: "anime", age: 21
}, {
    name: 'adasdas', age: 22
}));
const displayUserProfile = (user) => {
    console.log(`${user.email} and ${user.age}`);
};
displayUserProfile({
    username: "Adsadads",
    age: 21,
    email: "adasdasdasd",
    phoneNo: 2121212
});
const displayUsername = (username) => {
    return `${username.username} and ${username.phoneNo}`;
};
console.log(displayUsername({ username: "Adsdas", age: 21, phoneNo: 2121212 }));
const displayProfileWithPick = (user) => {
    console.log(`${user.email} and ${user.age}`);
};
displayProfileWithPick({
    email: "asdadad",
    age: 21,
    // username : "Adasdad"
});
// real life usecase while updating user data => let's say user wants to update the email only so he will pass the email thingy but if our type of userObject want all fields like username, password fullname then it will create problem and in that case we can use the Partial thingy => its your choise to pass which one u want to pass
var Access;
(function (Access) {
    Access[Access["create"] = 0] = "create";
    Access[Access["delete"] = 1] = "delete";
    Access[Access["edit"] = 2] = "edit";
})(Access || (Access = {}));
const updateAdmin = (propObj) => {
    // hit db and updates the details 
};
updateAdmin({
    usernam: "adads",
    accessProp: ["edit"]
});
const ApiFiles = {
    apikey: 'asdadsads',
    apiEndPoint: 'https://openAi.api.com'
};
// RECORD => When we want to define types in object => key value pairs 
const userObject = {
    'userID1-1232': { id: "Adsads", name: "asdadads" },
    122: { id: "Adsads", name: "asdadads" },
    false: { id: "Adsads", name: "asdadads" },
};
// MAP => fancy way to create Object in TYPESCRIPT 
const userMap = new Map();
userMap.set("animesh", { id: 1212, name: "!21212" });
userMap.set("adsads", { id: "adadad", name: "!21adadad212" });
console.log(userMap);
console.log(userMap.get("animesh"));
