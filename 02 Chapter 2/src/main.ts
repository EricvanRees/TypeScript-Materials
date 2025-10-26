// TypeScript has 3 primitive types: number , boolean and string , same as in JavaScript. According to official TypeScript docs: we should always use lowercase names for primitive types, as Number, Boolean and String are special built-in types. //

// how to explicitly declare that myName is a string: use column and specifiy data type
let myName: string
let meaningOfLife: number
let isLoading: boolean
// let album: any is also a possibility, as "any" enables using any type of value
// "string | number" is a union type, so either string or number type would be OK:
let album: string | number

myName = 'John'
meaningOfLife = 42
isLoading = true
album = 1984

// you need to declare the variable type in a function
// if not, TS implicitly will assign a and b to be of  "any" type
// if you assign a to a number and b to a string, function will still return a string
const sum = (a: number, b: number) => {
  return a + b
}

let postId: string | number
let isActive: number | boolean 
// regex is also a TS data type
let re: RegExp  = /\w+/g