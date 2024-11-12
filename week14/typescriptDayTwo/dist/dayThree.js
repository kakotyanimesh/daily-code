"use strict";
// start from generics => the goat thingy 
// we need this so that we dont have to repeat things everytime we change the input type or type changing 
Object.defineProperty(exports, "__esModule", { value: true });
exports.genericsNumber = void 0;
// function identify<Type>(str : Type) : Type{
//     return str
// }
const identify = (str) => {
    return str;
};
console.log(identify("animesh"));
const lengthPass = (input) => {
    // console.log(input.length); we cant do this as length doesnot exists here
    return input;
};
// const lengthPassWithProperType = <t> (input : t[]) :t[] => {
//     console.log(input.length);
//     return input  
// }
const lengthPassWithProperType = (input) => {
    console.log(input.length);
    return input;
};
const getFirstNumber = (arr) => {
    return arr[0];
};
console.log(getFirstNumber([1, 2, 'qweqewq', 12])); // i can enter any type inside the array which is a problem
const firstEl = getFirstNumber([1, 2, "Aadadad"]);
// firstEl.toUpperCase() //=> Ts can't figure out as we have both number and string inside the array
// error is Property 'toUpperCase' does not exist on type 'string | number'.Property 'toUpperCase' does not exist on type 'number'
const genericsNumber = (arr) => {
    return arr[0];
};
exports.genericsNumber = genericsNumber;
const el = (0, exports.genericsNumber)([12.2323, 2, 3, 4]);
console.log(el.toFixed(2));
const elString = (0, exports.genericsNumber)(["asdad", "asdadadad", "12"]);
console.log(elString.toUpperCase());
