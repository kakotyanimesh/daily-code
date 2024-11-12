// start from generics => the goat thingy 
// we need this so that we dont have to repeat things everytime we change the input type or type changing 

// function identify<Type>(str : Type) : Type{
//     return str
// }

const identify = <T>(str : T): T => {
    return str
}

console.log(identify("animesh"));


const lengthPass = <t> (input : t) : t => {
    // console.log(input.length); we cant do this as length doesnot exists here
    
    return input
}


// const lengthPassWithProperType = <t> (input : t[]) :t[] => {
//     console.log(input.length);
//     return input  
// }


 const lengthPassWithProperType = <Type> (input : Array<Type>) : Array<Type> => {
    console.log(input.length);
    return input
    
}

const getFirstNumber = (arr : (string | number)[]) => {
    return arr[0]
}

console.log(getFirstNumber([1, 2, 'qweqewq', 12])); // i can enter any type inside the array which is a problem

const firstEl = getFirstNumber([1, 2, "Aadadad"])

// firstEl.toUpperCase() //=> Ts can't figure out as we have both number and string inside the array
// error is Property 'toUpperCase' does not exist on type 'string | number'.Property 'toUpperCase' does not exist on type 'number'

export const genericsNumber = <Type>(arr : Type[]) : Type => {
    return arr[0]
}

const el = genericsNumber<number>([12.2323, 2, 3, 4])
console.log(el.toFixed(2));

const elString = genericsNumber<string>(["asdad", "asdadadad", "12"])

console.log(elString.toUpperCase());


