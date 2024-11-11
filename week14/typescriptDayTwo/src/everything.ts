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

const isAStudent = (name : string): string => {
    // if(name === newStudent.name) {
    //     return `${name} is one of our Student`
    // } else return `nah he is not our student`

    return name === newStudent.name ? `yes ${name}  is our student` : `nah ${name}  isnot our student`
}

console.log(isAStudent("animesh"));
console.log(isAStudent("asdadasd"));
console.log(isAStudent("animes]]hasdasd"));
