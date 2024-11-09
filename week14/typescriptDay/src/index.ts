let x: number = 1 // type inferencing 
// => its better if by mistake i write x = animesh then compiler will stop and if i want to convert to string then have to use :number | string and to covert tsc to js we run npx tsc -b 
console.log(x);


const greet = (name : string) => {
    console.log(`hellow ${name}`);
    
}

greet('animesh')

// special type in ts is any which can take any type like string, boolean, number

let y : any = 19
console.log(y);
y = 'animadas'
console.log(y);
y = false
console.log(y);


const sum = (x:number, y: number):number => {
    return x - y;
    
}
//  tsc compiler is smart enough to kown the type of number + number so we dont have to write :number to a function  

console.log(sum(10, 5));

//  type script can't check the writing safety like we can return minus in sum function 


const isLegal = (x: number) => {
    if(x > 18) return true
    else return false
} 
//  tsc compiler is smart enough to kown the type of this 

console.log(isLegal(20));
console.log(isLegal(5));


//  have to define a function that takes a function as input and calls it after 1 sec so what will be the type of input function , so for that we can use void if our input function has to type ( we want to give any type ig )
const fn = () => {
    console.log(12);
}


const delay = (funn : () => void) => {
    setTimeout(funn, 1000);
}

delay(fn)

//  non premetives types as input => object as input or array as input 
// we define what is it => i

const hellooo = (user: {
    name : string,
    age : number
}) =>{
 console.log(`hellow, ${user.name}`);
 
}


hellooo({name : 'aniesh', age:21})

// this creates to much of objects as type  but for that we can use interface

interface UserType {
    name : string,
    age : number
}

const newHello = (user : UserType) => {
    console.log(user.name + user.age);
}

newHello({name : 'animesh', age : 32})