"use strict";
// Chapter 5: Assertions
// With type assertions, you can convert to a more or less specific type than you start out with.
let a = 'hello';
let b = a; // less specific: string or number
let c = a; // more specific
// this angle bracket type syntax does work in TS, but not in React
let d = 'world';
let e = 'world';
// example of a type assertion
// assertion is the "as string" for the return value
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Be careful! TS sees no problem, but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
// double casting is using two assertions at a time like "(10 as unknown) as string"
// assertions are very useful when used with the DOM
// using an "!" is a non-null assertion:
//const img = document.getElementById('img')!
const img = document.getElementById('img');
const myImg = document.querySelector('img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
