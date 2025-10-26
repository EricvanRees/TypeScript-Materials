/* 

***Tutorial covers Objects, Arrays, Tuples, and Enums***

Define data type of empty array as follows: let bands: string[] = []

A tuple is a type in TypeScript that is used to represent an array in which the type of a fixed number of elements is known, but not for all the elements. It provides a way to represent the ordered set of the element types for certain elements in a TypeScript array.

Make a variable type optional by adding a question mark, now you can leave out "active" if you define a Guitarist object.

type Guitarist = {
  name: string,
  active?: boolean,
  albums: [1984, 5150, 'OU812']
}

Instead of using "type" for defining an object, you can also use "interface". Interfaces are a feature of TypeScript that allows us to define the structure or shape of an object and specify the properties and methods that an object has or should have. Their primary function is type checking and aiding developers in catching type-related errors during development.

Q:What is the difference between a type and an interface in TypeScript?
A: Types in TypeScript are more flexible and can define primitive, intersection, union, tuple, or different types of data, while interfaces are used to describe the shape of an object. Types use the type keyword for creating new type, while interfaces use the interface keyword for declaring an interface.

*/
// array of string datatype
let stringArr = ['one', 'hey', 'Dave']
// array of mixed datatypes (string and number)
let guitars = ['Strat', 'Les Paul', 5150]
// second array of mixed datatypes (string, numbers, boolean)
let mixedData = ['EVH', 1984, true]
// adding a string value to existing array is no problem as long as the data type is equal to that of the existing array
stringArr[0] = 'John'
stringArr.push('hey')
// same with mixed data array: you can add array values of mixed datatypes
guitars[0] = 1984
guitars.unshift('Jim')
// creating an empty array will have TS infer the "any " data type
let test = []
// empty array can only hold string data:
let bands: string[] = []
// now, this works fine:
bands.push('Van Halen')

// Tuple is handy for defining a an array with a fixed length, and data types for specific positions
// this means you cannot assign elements to positions that don't exist or assign elements of different data types on existing positions
let myTuple: [string, number, boolean] = ['Dave', 42, true]
// this is an array with mixed types (union types, which are used when a value can be more than a single type), not a tuple
let mixed = ['John', 1, false]
// there is no problem with setting a mixed array to a tuple as the "mixed" accepts the same data types as the tuple
mixed = myTuple 
// no problem, but the other way around does not work (see below), because "mixed" may have fewer elements than myTuple:
// myTuple = mixed - does not work, you can not assign a mixed array to an array that requires 3 elements specifically

// Objects
let myObj: object
myObj = []
console.log(typeof myObj) // logs "object"
// being of Object type means it is reassignable, so reassigning to an array is OK with TS:
myObj = bands
// setting myObject to an empty object:
myObj = {}

// example object
const exampleObj = {
  prop1: 'Dave',
  prop2: true,
}

/* In TypeScript, a "type" is a convenient way to refer to different properties and functions that a value has. A value is anything you can assign to a variable e.g., a number, a string, an array, an object, and a function.

type Guitarist {
  name: string,
  active?: boolean,
  albums: (string | number)[]
}

*/

/* 
Interfaces are a feature of TypeScript that allows us to define the structure or shape of an object and specify the properties and methods that an object has or should have. Their primary function is type checking and aiding developers in catching type-related errors during development.
*/
interface Guitarist {
  name?: string,
  active?: boolean,
  albums: (string | number)[]
}

let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
  name: 'Jimmy',
  active: true,
  albums: ['I', 'II', 'IV']
}

// arrow function that takes in Guitarist interface (works the same way as passing in a type)
const greetGuitarist  = (guitarist: Guitarist) => {
  /* If a property is optional and you call a method on it, you have to make that optionable as well using an if statement. This means adding a question mark to the property name. This is called "narrowing". */
  if (guitarist.name) {
    return `Hello ${guitarist.name?.toUpperCase}!`
  } 
  return 'Hello!'
}

console.log(greetGuitarist(jp));

// Enums

// Unlike most TS features, Enums are not a type-level addition to JS but something added to the language and runtime.

// Enums are a feature added to JavaScript in TypeScript which makes it easier to handle named sets of constants. By default an enum is number based, starting at zero, and each option is assigned an increment by one. This is useful when the value is not important.

enum Grade {
  U = 1, // now index number will start with 1 instead of 0
  D,
  C,
  B,
  A,
}

console.log(Grade.U);