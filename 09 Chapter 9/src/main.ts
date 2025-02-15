// Utility Types

/* TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types. */

// Partial changes all the properties in an object to be optional.

interface Assignment {
  studentId: string,
  title: string,
  grade: number,
  verified?: boolean,
}

// update assignment function
// using the Partial tells TS you don0t want to update all the props, just the ones you specify in the function 
const updateAssignment = (assign: Assignment, propsUpdate: Partial<Assignment>): Assignment => {
  return {...assign, ...propsUpdate}
}


const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
}

console.log(updateAssignment(assign1, { grade: 95}));
// store the result in a variable
const assignGraded: Assignment = updateAssignment(assign1, {grade: 95 }) 

// Required & Readonly 

// Required changes all the properties in an object to be required.
// Readonly is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database, etc.
  return assign
}

const assignVerified: Readonly<Assignment> = { ...assignGraded, verified: true}

recordAssignment({...assignGraded, verified: true})

// Record
// Record is a shortcut to defining an object type with a specific key type and value type.

// example using only a string
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
}

// example using different string literals
type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U"
}

// example using an interface
interface Grades {
  assign1: number,
  assign2: number,
}

const gradeData: Record<Students, Grades> = {
  Sara: {assign1: 85, assign2: 93},
  Kelly: { assign1: 76, assign2: 15},
}

// Pick and Omit

// Pick removes all but the specified keys from an object type.

// Omit removes keys from an object type.

// means: only keep studentId and grade
type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
  studentId: "k123",
  grade: 85,
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
}

//Exclude and Extract

// Exclude removes types from a union.

type adjustedGrade = Exclude<LetterGrades, "U">

type highGrades = Extract<LetterGrades, "A" | "B">

// Nonnullable

type AllPossibleGrades = 'Dave' | 'John' | null | undefined

// excludes null and undefined:
type NamesOnly = NonNullable<AllPossibleGrades>

// ReturnType

// example that is not working well:
// because of the newAssign variable in 2):

// 1) type newAssign = {title: string, points: number)

// 2) const createNewAssign = {title: string, points: number}: newAssign => {
//return { title, points}
//}

const createNewAssign = (title: string, points: number) => {
  return { title, points }
}

// return type will now automatically be updated if you change createNewAssign:
type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign);

// Parameters
// Parameters extracts the parameter types of a function type as an array.

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)
console.log(tsAssign2);

// Awaited - helps us with ReturnType of a Promise
// This type is meant to model operations like await in async functions, or the .then() method on Promises - specifically, the way that they recursively unwrap Promises.

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}

const fetchUsers = async (): Promise<User[]> => {

  const data = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  ).then(res => {
    return res.json()
  }).catch(err => {
    if (err instanceof Error) console.log(err.message);
  })
  return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users));