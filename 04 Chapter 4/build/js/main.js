"use strict";
// Literal types
let myName;
let userName;
userName = 'Amy';
// functions
const add = (a, b) => {
    return a + b;
};
// 'void' is used for functions that don't return anything
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// same example with an interface 
// interface mathFunction { 
//   (a: number, b: number): number
// }
// multiply is the alias for the type definition declared with mathFunction
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// optional parameters, need to be the last one in the list
const addAll = (a, b, c) => {
    // typeguard
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default values
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
// sumAll prints 7 as it also adds c = 2
logMsg(sumAll(2, 3));
// if you want to skip ovef a value, add "undefined":
logMsg(sumAll(undefined, 3));
// Rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
// compare with "total" function above
// the rest paramater (...) should come at the end
const calcTotal = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
logMsg(calcTotal(1, 2, 3, 4));
// The never type represents the type of values that never occur. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns. Variables also acquire the type never when narrowed by any type guards that can never be true.
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// this function returns never type if moused over function name
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
    }
};
// now it says void as it does not return anything
const finite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom typeguard example
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    //if (typeof value === 'number') return 'number'
    // if you return never, TS is ok. It requires an explicit return
    return createError('This should never happen');
};
