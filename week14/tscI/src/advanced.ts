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
