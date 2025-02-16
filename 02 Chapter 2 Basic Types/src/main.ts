// explicitly declare that myName is a string:
let myName: string
let meaningOfLife: number
let isLoading: boolean
// let album: any is also a possibility
// "string | number" is a union type
let album: string | number

myName = 'John'
meaningOfLife = 42
isLoading = true
album = 1984

// you need to declare the variable type in a function
const sum = (a: number, b: number) => {
  return a + b
}

let postId: string | number
let isActive: number | boolean 

let re: RegExp  = /\w+/g