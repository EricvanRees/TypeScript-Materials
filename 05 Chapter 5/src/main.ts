// Chapter 5: Assertions
// With type assertions, you can convert to a more or less specific type than you start out with.
// see: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html 

/* additional link: https://www.tutorialsteacher.com/typescript/type-assertion

Type assertion allows you to set the type of a value and tell the compiler not to infer it. This is when you, as a programmer, might have a better understanding of the type of a variable than what TypeScript can infer on its own.

*/

type One = string
type Two = string | number
type Three = 'hello'

let a: One = 'hello'

let b = a as Two // less specific: string or number
let c = a as Three // more specific

// this angle bracket type syntax does work in TS, but not in React
let d = <One>'world'
let e = <string | number>'world'

// example of a type assertion
// assertion is the "as string" for the return value (line 31)
const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
  if (c === 'add') return a + b
  return '' + a + b
}

let myVal: string = addOrConcat(2,2, 'concat') as string
// Be careful! TS sees no problem, but a string is returned
let nextVal: number = addOrConcat(2,2, 'concat') as number

// double casting is using two assertions at a time like "(10 as unknown) as string"

// assertions are very useful when used with the DOM

// using an "!" is a non-null assertion:
// const img = document.getElementById('img')!
// You don't have to use this in combination with "as HTMLImageElement"

// even though the image doesn't exist in the HTML, TS does not complain after using an assertion:
const img = document.getElementById('img') as HTMLImageElement
const myImg = document.querySelector('img')! 
const nextImg = <HTMLImageElement>document.getElementById('#img')

img.src 
myImg.src

