/* 

TypeScript is a strongly typed language

Strongly typed languages demand the specification of types

TS = strongly types language, which helps to document and self-inforce code

Loosely typed languages do not require type specification
JS = loosely typed language aka "weakly typed"

relates to:
- static typing
- dynamic typing
- but it is not the same

A language that is strongly typed can be EITHER statically OR dynamically typed.
TS is a statically typed language. This means types are checked at compile time.
JS is a dynamically typed language. This means types are checked at run time.

TS benefits include:
- self-documenting code
- catching errors during development
- great for teams

You can give two different data types in TS to a variable with the union type, for example "let album: string | number"

Variables can have the string, number, boolean, any, or regular expression (re) type.

*/

"use strict";
let myName;
let meaningOfLife;
let isLoading;
let album;
myName = 'John';
meaningOfLife = 42;
isLoading = true;
album = 1984;
const sum = (a, b) => {
    return a + b;
};
