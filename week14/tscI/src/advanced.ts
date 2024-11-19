type numberType = number[]
 // making an array of number by adding [] after number word

const arrayInput = (input : bothStringNumber) : (string | number) => {
    return input[0]
}



console.log(arrayInput([1, 2, 3,]));


type bothStringNumber = string[] | number[]

console.log(arrayInput(["adadad", "adadad", "12as"]));



//  in the above code the problem is the giving both string or number to input also returns us both string and number as type of output we want the ts to figure out if we give string as input it has to return the string or for number it has to return number 
// in above if we try to use the toLowerCase() it wont work as ts cant figure out in which the toLowerCase() has to apply and THE SOLUTION IS <TYPE> GENERICS ( i have always forget about it Its GENERICS)

function getFirstElement<Type>(arr:Type[]){
    return arr[0]
}

const numberReturn = console.log(getFirstElement([1, 3, 4, 5])); // we can explicitely tell ts by adding <number> after the function call or we can foget about it as ts now smart enough to do it 
const stringReturn = getFirstElement(['adad', "adasdad", "12rasd"])
console.log(stringReturn.toUpperCase());
// :%s/oldword/newword/g

type TypeUser = {
    name : string,
    age : number
}

console.log(getFirstElement<TypeUser>([
    {
        name : "a",
        age : 12
    },
    {
        name : 'adasdasd',
        age : 12
    }
]).age);

// difference b/w types and interfaces
/*
    1. We can implement interface in class but can't implement types in class
    2. types can have union or intersection of interfaces but interfaces cant have union or intersection of types
*/


// classes in typescript

class Vehical{
    name : string
    model : string

    constructor(name : string, model : string){
        this.name = name,
        this.model = model
    }

    startEngine() {
        console.log(`the vehicle with name ${this.name} has model of ${this.model} has stated`);
    }


}

const newVehicle = new Vehical("honda", "223sddfdf") // creating an instance of vehicle class

newVehicle.startEngine()

// you cant give type to a constructor 
// constructor: string(name : st) => this is wrong

// three important things in ts class => Public , Private and Proctected

class PublicClass {
    constructor(public name : string, public age : number){
        this.name = name,
        this.age = age
    }

    getName(){
        console.log(`name is ${this.name} and age is ${this.age}`);
    }
}

const P2 = new PublicClass("P1", 21)
P2.getName()
console.log(P2.name); // here i can also access the name 
console.log(P2.age);
//  BUT WE CANT DO IT IN PRIVATE I GUESS


class PrivateClass {
    constructor(private name : string, private age : number){
        this.name = name,
        this.age = age
    }

    getName(){
        console.log(`name is ${this.name} and age is ${this.age}`);
    }
}

const P3 = new PrivateClass("P1", 21)
P3.getName()
// console.log(P3.name); or console.log(P3.age); we cant access to the name and age property of P3 which is an instance of Private class 
//  the same thing hapens in protected class but in protected class we can access it in subclass also 

class ProctectedClass {
    constructor(protected name : string, protected age : number){
        this.name = name,
        this.age = age
    }

    getName(){
        console.log(`name is ${this.name} and age is ${this.age}`);
    }
}

const P1 = new ProctectedClass("P1", 21)
P1.getName()
// console.log(P1.name);  this is unaccecptable 

//  but we can access it in subclass that extends the protected class

class subclass extends ProctectedClass {
    showNAME () {
        console.log(`name ${this.name} and age is ${this.age}`);   
    }
}
// above example name and age is accessible from outside the class also 

const subClassP1 = new subclass('anads', 21)
subClassP1.showNAME()


// class tsClass {
//     name : string
//     constructor(name : string) {
//         this.name = name
//     }

// }

class tsClassPublic{
	constructor(public name : string){
		this.name = name
	}
}

const publicOne = new tsClassPublic("animes")
console.log(publicOne.name );
// "animes" is going to print 

class protectedClass {
	constructor(protected name : string ) {
		this.name = name
	}
}	

const protecteddd = new protectedClass("asdad")
//protecteddd.name no accessible 

class subclassdsd extends protectedClass {
getname(){
	return `${this.name}`
}
}

// tsx module can compile ts without turning it into js , it directly runs on node js 

let str : string = "animesh"
console.log(str.concat("adsads"));
console.log(str.charAt(2))
console.log(str.indexOf('a'));
console.log(str.replace('a', 'b'));
console.log(str.split('m')); // returns us an array of string type type = <string>[]

let strTwo : string = 'animesh,kakoty,ronaldo'
console.log(strTwo.split(',', 2));
console.log(strTwo.length); // the commas are also count as charter
console.log(strTwo.indexOf(','));
console.log(strTwo.split('o', 2));
console.log(strTwo.toLocaleLowerCase());
console.log(strTwo.toLocaleUpperCase());
console.log(strTwo.toUpperCase());
console.log(strTwo.includes('animesh'));


// declaration of array in ts 

const arrOne : string[] = ['animesh', 'kakoty']
const arrTwo : number[] = [12, 13]
const arrThree : Array<string> = ['anime', 'akkt']
const arrFour : Array<number> = [12, 144]
const arrfive : Array<number | string> = ['animesh', 144]
const arrsix : (string | number)[] = ['animesh', 144]



// advanced ts like Pick stc

console.log("advanced Typescript Api");

interface userList {
    name : string,
    age : number
}


const sum_Age = (user1: userList, user2: userList) : number => {
    return user1.age + user2.age
}


console.log(sum_Age({
    name : "anime", age : 21
},
{
    name : 'adasdas', age : 22
}));


// PICK => gives us the freedom to pick type from interface or type and it returns a type => we can only use Pick in a type 

interface UserProfileOne {
    username : string, 
    age : number,
    email : string,
    phoneNo : number
}

const displayUserProfile = (user : UserProfileOne) => {
    console.log(`${user.email} and ${user.age}`);
    
}

displayUserProfile({
    username : "Adsadads",
    age : 21,
    email : "adasdasdasd",
    phoneNo : 2121212
})

//  this is good but i dont want the email and phone number in the displayProfile function those are unnecessary so in this type of case we can use the PICK thingy

type UserPick = Pick<UserProfileOne, 'email' | 'age'>
type username = Pick<UserProfileOne, 'username' | 'age' | 'phoneNo'>

const displayUsername = (username : username) : string => {
    return `${username.username} and ${username.phoneNo}`
}

console.log(displayUsername({username : "Adsdas", age : 21, phoneNo : 2121212}));


const displayProfileWithPick = (user : UserPick) => {
    console.log(`${user.email} and ${user.age}`);   
}


displayProfileWithPick({
    email : "asdadad",
    age : 21,
    // username : "Adasdad"
})

// now we just pick two keys from the parent Interface and make type with it with the help of PICK thingy
//  reallife case => we want to update the email and password of a user so in every db call we dont want to pass the username age phonenumber we just need to pass email and password that's where we need Pick to use 
// it has SYNTAX =>  <PARENT-INTERFACE/TYPE, keys values that we want to pick>

// PARTIAL => OPTIONAL THINGY the age is optinal for type safety , ki dont give me error if i forget to pass the error 

interface admin {
    name : string,
    age ? : number // age is optional : its your choise to pass age when using this interface
    lastName ? : string
}



// real life usecase while updating user data => let's say user wants to update the email only so he will pass the email thingy but if our type of userObject want all fields like username, password fullname then it will create problem and in that case we can use the Partial thingy => its your choise to pass which one u want to pass

    enum Access {
        'create',
        'delete',
        'edit'
    }
interface adminInterface {
    usernam : string,
    email : string,
    startDate : Date,
    accessProp : Array<keyof typeof Access>
}

type UpdatedOnes = Pick<adminInterface, 'usernam' | 'accessProp' >

type partialUpdatesOnes = Partial<UpdatedOnes>

const updateAdmin = (propObj: partialUpdatesOnes) => {
    // hit db and updates the details 
}

updateAdmin({
    usernam : "adads",
    accessProp : ["edit"]
})

// we can use type for acess thingy or enum but enum will add more centrelized or runtime checks and using type is like making it simple also in enum we can do Access.edit or something behaves like object


// READONLY => When you cant edit that key value after being initialized => lets say we dont want to change the api key or the api endpoint

type ApiConfi = {
    readonly apikey : string,
    readonly apiEndPoint : string
}

const ApiFiles:  Readonly<ApiConfi> = {
    apikey : 'asdadsads',
    apiEndPoint : 'https://openAi.api.com'
}

// RECORD => When we want to define types in object => key value pairs 

const userObject : userObjectType = {
    'userID1-1232' : {id : "Adsads", name : "asdadads"},
    122 : {id : "Adsads", name : "asdadads"},
    false : {id : "Adsads", name : "asdadads"},
}

//  how we are going to pass type to above object as the keys are also changing 

interface valueTypes {
    id : string | number,
    name : string
}

type userObjectType = Record<string, valueTypes> // if i pass number in key instead of string it wont complain as in js automatically converts the keys to string so no matter which type u send it gonna convert to string 

// MAP => fancy way to create Object in TYPESCRIPT 

const userMap = new Map<string, valueTypes>()

userMap.set("animesh", {id : 1212, name : "!21212"})
userMap.set("adsads", {id : "adadad", name : "!21adadad212"})

console.log(userMap);

console.log(userMap.get("animesh"));

// RECORD AND MAP  => ways to create type for object and ways to create object => Record helps us to create type for both key and values syntax is inside this <> and with map we dont have to do extra steps we can just call the MAP thingy and give types of key and values inside the two mf <>



// EXCLUDE => just not an opposite to Pick => exclude the ones that we dont need 
// works only on UNION TYPES not in object like Pick

type events = 'scroll' | 'click' | 'mousemove'

type ExcludeType = Exclude < events, 'scroll' >// 



const userDisplay = (events : ExcludeType) => {
    console.log(events.length);
    
}

