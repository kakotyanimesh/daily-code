// More api in Typescript 
interface UserProfile {
    name : string,
    age : number
}


const sumofAge = (userOne:  UserProfile, userTwO : UserProfile) :number =>  {
    return userOne.age + userOne.age
}

console.log(sumofAge({
    name : "asdasdsa",
    age : 321 
},{
    name : "232323",
    age : 23
}));


