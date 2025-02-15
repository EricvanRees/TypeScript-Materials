// Generics are code templates that you can define and reuse throughout your codebase. They provide a way to tell functions, classes, or interfaces what type you want to use when you call it.

// For more information, see these 3 Medium articles:
// 1)https://medium.com/wix-engineering/how-to-better-understand-ts-generics-the-basics-c610063b4b38
// 2) https://medium.com/wix-engineering/how-to-better-understand-ts-generics-mapped-types-2dd0a2cbcd6d
// 3) https://medium.com/wix-engineering/how-to-better-understand-ts-generics-conditional-types-2077daac7da5 

/* What is the Double‑Bang Operator in JavaScript? While inheriting older codebases, or even working on a fresh build, you might see or use two consecutive exclamation marks: !! . This is the double‑bang operator, and it can be used to typecast values to a strict boolean value (either true or false ).

Type narrowing is a process of refining or narrowing down the type using certain conditions with a particular code block. It will help developers as well as TypeScript itself to infer the more accurate types within the code and work with them in a clean and strict code environment. */

////////////////////////////////////////////////////////////////////
// example of a generic function that works for any data type:

// this is handy for utility functions when you're not sure what variable type will be passed in
// <T> is a type parameter or type variable in the example below;

// first version without generic: 
// const echo = (arg: string): string => arg
// second version:
const echo = <T>(arg: T): T => arg
// by making it generic, you can pass in any type passed into the function (not just a string)

// example of utility function with a generic:
// it uses the generic to check the type of variable passed in
// always returns a boolean, but the input type is unknown
const isObj = <T>(arg: T): boolean => {
  return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

console.log(isObj(true)); // false
console.log(isObj('John')); // false
console.log(isObj([1, 2, 3])); // false
console.log(isObj({ name: 'John '})); // true
console.log(isObj(null)); // false

//////////////////////////////////////////////////
// if your function needs to do some logic, you might need a generic (see example below):
// The double‑bang operator (!!) is used to typecast values to a strict boolean value (either true or false )

const isTrue = <T>(arg: T): { arg: T, is: boolean} => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false}
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false}
  }
  return { arg, is: !!arg}
}

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('Dave'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({})); // modified
console.log(isTrue({ name: 'Dave'}));
console.log(isTrue([])); // modified
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

//////////////////////////////////////////////////////
// the function above can be written as an interface too:

/* interface BoolCheck<T> {
  value: T,
  is: boolean,
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    // you need to repeat every instance of "value" before "arg", as defined in the interface
    return { value: arg, is: false}
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false}
  }
  return { value: arg, is: !!arg}
} */

/* console.log(checkBoolValue([1, 2, 3]));
console.log(checkBoolValue([])); */

/////////////////////////////////////////////////////
// another interface example

interface HasID {
  id: number
}

// narrowing the generic type using "extends", making the HasID property required
const processUser = <T extends HasID>(user: T): T => {
  // process the user with logic here
  return user
}

// this works fine:
console.log(processUser({ id: 1, name: 'Dave'}));
// lacks ID property, so won't run:
// console.log(processUser({name: 'Dave'}));

//////////////////////////////////////////////////////
// a more complex example with extends


const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
  return users.map(user => user[key])
}

// data comes from https://www.jsonplaceholder.org/. 
const usersArray = [
  {
    "id": 1,
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "birthDate": "1973-01-22",
    "login": {
      "uuid": "1a0eed01-9430-4d68-901f-c0d4c1c3bf22",
      "username": "johndoe",
      "password": "jsonplaceholder.org",
      "md5": "c1328472c5794a25723600f71c1b4586",
      "sha1": "35544a31cc19bd6520af116554873167117f4d94",
      "registered": "2023-01-10T10:03:20.022Z"
    },
    "address": {
      "street": "123 Main Street",
      "suite": "Apt. 4",
      "city": "Anytown",
      "zipcode": "12345-6789",
      "geo": {
        "lat": "42.1234",
        "lng": "-71.2345"
      }
    },
    "phone": "(555) 555-1234",
    "website": "www.johndoe.com",
    "company": {
      "name": "ABC Company",
      "catchPhrase": "Innovative solutions for all your needs",
      "bs": "Marketing"
    }
  },
  {
    "id": 2,
    "firstname": "Jane",
    "lastname": "Smith",
    "email": "janesmith@example.com",
    "birthDate": "1983-02-22",
    "login": {
      "uuid": "2a0eed02-9430-4d68-901f-c0d4c1c3bf22",
      "username": "janesmith",
      "password": "jsonplaceholder.org",
      "md5": "c1328472c5794a25723600f71c1b4586",
      "sha1": "35544a31cc19bd6520af116554873167117f4d94",
      "registered": "2022-06-10T12:45:20.022Z"
    },
    "address": {
      "street": "456 Oak Street",
      "suite": "Suite 200",
      "city": "Anytown",
      "zipcode": "12345-6789",
      "geo": {
        "lat": "42.3456",
        "lng": "-71.6789"
      }
    },
    "phone": "(555) 555-5678",
    "website": "www.janesmith.com",
    "company": {
      "name": "XYZ Corporation",
      "catchPhrase": "Leading the way in innovation",
      "bs": "Finance"
    }
  },
  {
    "id": 3,
    "firstname": "Bob",
    "lastname": "Johnson",
    "email": "bobjohnson@example.com",
    "birthDate": "1974-11-12",
    "login": {
      "uuid": "3a0eed11-9430-4d68-901f-c0d4c1c3bf12",
      "username": "bobjohnson",
      "password": "jsonplaceholder.org",
      "md5": "c1328472c5794a25723600f71c1b4586",
      "sha1": "35544a31cc19bd6520af116554873167117f4d94",
      "registered": "2022-06-10T12:45:20.022Z"
    },
    "address": {
      "street": "789 Elm Street",
      "suite": "Apt. 100",
      "city": "Anytown",
      "zipcode": "12345-6789",
      "geo": {
        "lat": "42.5678",
        "lng": "-71.1234"
      }
    },
    "phone": "(555) 555-9012",
    "website": "www.bobjohnson.com",
    "company": {
      "name": "Acme Corporation",
      "catchPhrase": "Your trusted partner",
      "bs": "Manufacturing"
    }
  }
]

console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "firstname"));

////////////////////////////////////////////////////////
// final example of using a generic in a class: 

class StateObject<T> {
  private data: T

  constructor(value: T) {
    this.data = value
  }

  get state(): T {
    return this.data
  }

  set state(value: T) {
    this.data = value
  }
}

const store = new StateObject<string>("John")
console.log(store.state)
store.state = "Dave"
// store.state = 12

const myState = new StateObject<(string|number|boolean)[]>([15])
myState.state = (['Dave', 42, true])
console.log(myState.state);