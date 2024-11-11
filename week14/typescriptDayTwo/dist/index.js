"use strict";
// day Two how to initialize => npm init -y => npx tsc --init => tsc -b
// to make something optional we use the ?:
const isLegal = (userDetails) => {
    return userDetails.age > 18 ? "I am legal" : "I am not legal";
};
let userObject = {
    name: "animesh",
    age: 21,
    address: {
        city: "India",
        pincode: 781212,
        country: "India Again"
    }
};
console.log(isLegal(userObject));
//  as the address is optional lets make one object with with no adress
const optionalUser = {
    name: "raman",
    age: 15,
};
const greet = (user) => {
    // console.log(user.age); we cant do it as age is only in User type not in Admin vice versa for permission
    console.log(user.name);
};
//  aRRAY OF NUMBERS GET MAX 
const max = (nums) => {
    let maxVal = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxVal)
            maxVal = nums[i];
    }
    return maxVal;
};
const islegal = (userArray) => {
    const filter = userArray.filter(x => x.age > 18);
    return filter;
};
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
]);
console.log(userss);
