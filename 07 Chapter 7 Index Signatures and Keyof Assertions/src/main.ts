// Index Signatures

/* From the TS documentation: A type in TypeScript usually describes an exact set of fields to match on an object. An index signature is a way to define the Shape of fields which are not known ahead of time.

The keyof operator in TypeScript is used to derive new types from an existing object type's keys. It is a TypeScript construct commonly used as a building block in generating advanced types from a source object type. TypeScript keyof is a trivial type manipulation operator introduced in v 2.1 .

****

Dave Gray: "Utility types are a set of generic types provided by TypeScript that perform certain operations on types.  Index Signatures are useful when you're creating an object, but you don't know the exact names of the object keys while knowing the shape of the object. You can declare the types of the keys and values. The other reason they're useful is that TS requieres an index signature if you attempt to access an object property dynamically.""  */

// index signature example with keys and values
// interface TransactionObj {
//  [index: string]: number
// make this readonly as follows:
// readonly [index: string]: number

 
interface TransactionObj {
  /* example of index signature, must be string, number, symbol, or template literal type, but cannot be a boolean: This would allow other properties to be added if it was created with this interface. */
  readonly [index: string]: number
  Pizza: number,
  Books: number,
  Job: number
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  // you can include more properties, even though they are not included in the interface above:
  Dave: 42
}

// standard way of accessing properties
console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

// dynamically accessing properties
let prop: string = 'Pizza'
// does not work as there is no index signature defined:
//console.log(todaysTransactions[prop]);

// this does work with an index signature, defined in line 11:
const todaysNet = (transactions: TransactionObj): number => {
  let total = 0
  for (const transaction in transactions) {
    total += transactions[transaction]
  }
  return total
}

console.log(todaysNet(todaysTransactions));

// this works as long as the property is not readonly
todaysTransactions.Pizza = 40

////////////////////////////////// 

interface Student {
  // include "undefined" when one of the properties is optional, in this case "classes":
  [key: string]: string | number | number[] | undefined
  name: string,
  GPA: number,
  classes?: number[]
}


const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200]
}
// the following is not a problem, as an index signature is defined:
//console.log(student.test);

// how to iterate over an object without a definition of an index signature:
// use "keyof" which creates a union type of existing properties to loop over an object.

for (const key in student) {
  // using an assertion (see chapter 4), creates a union type which is the specific string literal (union of name, GPA, and classes) to loop through the object:
  console.log(`${key}: ${student[key as keyof Student]}`);
}

// variation of the example above:
Object.keys(student).map(key => {
  console.log(student[key as keyof typeof student]);
})

// The keyof operator in TypeScript is used to derive new types from an existing object type's keys. It is a TypeScript construct commonly used as a building block in generating advaced types from a source object type.

// another example of keyof using a function:
const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
}

logStudentKey(student, 'GPA')

/////////////////////////////////// 

// the "Incomes" example with "Record<...>" is the equivalent of providing an index signature as "Incomes" right below using an index signature, but using a type.

//interface Incomes {
  // [key: string]: number
//}

type Streams = 'salary'| 'bonus' | 'sidehustle'

// Utility types are a set of generic types provided by TypeScript that perform certain operations on types.
// it is less code (below) and allows the use of string literals in the Streams definition above. The index signature defintion above does not allow for using string literals []

// A Record in TypeScript is a generic utility type that constructs an object type with a specific set of keys of a given type, and where all the values are of another specified type. The Record type is defined as Record<K, T> , where K represents the type of the keys and T represents the type of the values.

// uses utility type of record instead of an index signature:
// this has a smaller syntax as index signature and allows for using string literals as the different types that are expected. 
// You cannot do this, but with "Record" you can:
// Interface Incomes {
//  [key: 'salary']: number
// }
type Incomes = Record<Streams, number | string>

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250
}

// you need to use an assertion (as keyof incomes) here even though the Record utility type was used when defining the different Streams types:
for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}





