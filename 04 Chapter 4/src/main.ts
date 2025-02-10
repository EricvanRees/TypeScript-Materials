// Type Aliases

/* Type aliases in TypeScript offer a streamlined approach to defining custom names for existing types, thereby bolstering code clarity and maintainability. Type aliases are versatile, accommodating various types, including primitives, object types, union types, and function signatures.

type aliases and interfaces cannot have default values, only for arrow functions as defined in the example code (line 75)
*/
  
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
  name?: string,
  active?: boolean,
  albums: (string | number)[]
}

// now userId is linked to the type alias
// this does NOT work for an interface
// interface are more like objects or classes (and extending those), 
// while types are like aliases or any TS type you might assign
type userId = stringOrNumber

// Literal types

// Literal types and aliases keep your keep DRY
let myName: 'Dave'

let userName: 'Dave' | 'John' | 'Amy'
userName = 'Amy'

// functions

// return type is also specified:
const add = (a: number, b: number): number => {
  return a + b
}

// 'void' is used for functions that don't return anything
const logMsg = (message: any): void => {
  console.log(message)
}

logMsg('Hello')
logMsg(add(2, 3))

let subtract = function (c: number, d: number): number {
  return c - d
}

// type alias example:
type mathFunction = (a: number, b: number) => number
// same example with an interface: 
// interface mathFunction { 
//   (a: number, b: number): number
// }

// multiply is the alias for the type definition declared with mathFunction
let multiply: mathFunction = function (c, d) {
  return c * d
}

logMsg(multiply(2, 2))

// optional parameters use question marks, these need to be the last one in the list
const addAll = (a: number, b: number, c?: number): number => {
  // typeguard or narrowing down
  if (typeof c !== 'undefined') {
    return a + b + c
  }
  return a + b
}

// default values
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c
}

logMsg(addAll(2, 3, 2))
logMsg(addAll(2, 3))
// sumAll prints 7 as it also adds c = 2
logMsg(sumAll(2, 3))
// if you want to skip over a value, add "undefined":
logMsg(sumAll(undefined, 3)); // logs 10 + 3 + 2 = 15

// Rest Parameters
const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr)
}

// compare with "total" function above
// the rest paramater (...) should come at the end:
const calcTotal = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(1, 2, 3, 4)) // logs 10
logMsg(calcTotal(1, 2, 3, 4))

// The never type represents the type of values that never occur. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns. Variables also acquire the type never when narrowed by any type guards that can never be true.

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
}

// this function returns never type if moused over function name
const infinite = () => {
  let i: number = 1
  while (true) {
    i++
    if (i > 100) break
  }
}

// now it says void as it does not return anything
const finite = () => {
  let i: number = 1
  while (true) {
    i++
    if (i > 100) break
  }
}

// custom typeguard example
const isNumber = (value: any): boolean => {
  return typeof value === 'number' ? true : false
}

// use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') return 'string'
  if (isNumber(value)) return 'number'
  //if (typeof value === 'number') return 'number'
  // if you return "never", TS is ok. It requires an explicit return
  return createError('This should never happen')
}


