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