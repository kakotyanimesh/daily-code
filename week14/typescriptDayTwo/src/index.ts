// day Two how to initialize => npm init -y => npx tsc --init => tsc -b

// INTERFACE used to define type of Non premitives data types like object 

interface UserInterface {
    name : string,
    age : number,
    address?: Address
}
// to make something optional we use the ?:

const isLegal = (userDetails : UserInterface) : string => {
    return userDetails.age > 18 ? "I am legal" : "I am not legal"
}

let userObject : UserInterface = {
    name : "animesh",
    age : 21,
        address : {
        city : "India",
        pincode : 781212,
        country : "India Again"
    }
}

console.log(isLegal(userObject));

//  as the address is optional lets make one object with with no adress

const optionalUser :UserInterface = {
    name : "raman",
    age : 15,
}

// dont repeat yourself  => we can write INTERFACE AND CAN USE IT IN OTHER INTERFACE ALSO 

interface Address {
    city : string,
    pincode : number,
    country : string
}


interface People {
    name : string,
    age : number,
    greet(phrase : string) : void
}


// assignment 
// two types user and admin
//  two function

interface Admin {
    name : string,
    permission : string
}

interface User {
    name : string,
    age : number
}

type UserOrAdmin = User | Admin
const greet = (user : UserOrAdmin) => {
    // console.log(user.age); we cant do it as age is only in User type not in Admin vice versa for permission

    console.log(user.name);
}


interface User {
    ageWQ : number | string
}

//  aRRAY OF NUMBERS GET MAX 

const max = (nums : number[]) => {
    let maxVal = 0
    for(let i = 0; i< nums.length; i++){
        if(nums[i] > maxVal) maxVal = nums[i]
    }

    return maxVal
}

interface UserInterfaceNew {
    firstName : string,
    lastName : string,
    age : number
}

const islegal = (userArray : UserInterfaceNew[])  => {
    const filter = userArray.filter(x => x.age > 18)

    return filter
}


const userss = islegal([
    {
        firstName: "Raman",
        lastName: "Singh",
        age: 16
    },
    {
        firstName: "Raman",
        lastName: "Singh",
        age: 16
    },
])

console.log(userss);
