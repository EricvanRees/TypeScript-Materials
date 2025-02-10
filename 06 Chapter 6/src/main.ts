/* For more info, see:
https://www.typescriptlang.org/docs/handbook/2/classes.html

TypeScript adds types and visibility modifiers to JavaScript classes. The members of a class (properties & methods) are typed using type annotations, similar to variables. */

// inside a TS class, properties and methods are called members

// class Coder {
//   name: string
//   music: string
//   age: number
//   lang: string

//   constructor(
//     name: string, 
//     music: string, 
//     age: number, 
//     lang: string
//   ) {
//     this.name = name
//     this.music = music
//     this.age = age
//     this.lang = lang
//   }
// }

// use visibility modifiers to avoid redundancy above (see second Coder class example below)

// assignments in the body of the constructor are not required

// difference between "private" and "protected" is that protected property can also be accessed in derived classes.

class Coder {       
     constructor(
      // access modifiers, see https://www.scholarhat.com/tutorial/typescript/access-modifiers:
       public readonly name: string, 
       public music: string, 
       private age: number, 
       protected lang: string = 'Typescript'
     ) {
       this.name = name
       this.music = music
       this.age = age
       this.lang = lang
     }

     public getAge() {
      return `Hello, I'm ${this.age}`
     }
   }

   const Dave = new Coder('Dave', 'Rock', 42)
   // this works fine:
   console.log(Dave.getAge())
   // both examples below do NOT work, you cannot access either property outside of the class:
   //console.log(Dave.age)
   //console.log(Dave.lang)

   class WebDev extends Coder {
    constructor(
      public computer: string,
      name: string,
      music: string,
      age: number,
    ) {
      // super is required when extending a class
      super(name, music, age)
      this.computer = computer
    }

    public getLang() {
      return `I write ${this.lang}`
    }
}

const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25)
console.log(Sara.getLang());
// the following two examples do not work as both are accessed outside of the class:
//console.log(Sara.age);
//console.log(Sara.lang);
////////////////////////////////////

// example of implementing an interface to a class:
// see for more info: https://www.tutorialsteacher.com/typescript/typescript-interface 

interface Musician {
  name: string,
  instrument: string,
  play(action: string): string
}

class Guitarist implements Musician {
  name: string
  instrument: string

  constructor(name: string, instrument: string) {
    this.name = name
    this.instrument = instrument
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`
  }
}

const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'));
///////////////////////////////////////// 

class Peeps {
  // the count value applies directly to the class, not to individual objects that are instantiated
  static count: number = 0

  static getCount(): number {
    return Peeps.count
  }

  public id: number

  constructor(public name: string) {
    this.name = name
    this.id = ++Peeps.count
  }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(Peeps.count); // returns 3
//////////////////////////////////////// 

// getters and setters
// "get" and "set" are special keywords in JS

class Bands {
  private dataState: string[]

  constructor() {
    this.dataState = []
  }

  public get data(): string[] {
    return this.dataState
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every(el => typeof el === 'string')){
      this.dataState = value // setters cannot return a value so return cannot be used here
      return // empty return statement is OK, but you cannot put the return before the line above
    } else throw new Error('Param is not an array of strings')
  }
}

const MyBands = new Bands()
MyBands.data = ['Neil Young', 'Led Zep']
// use the getter:
console.log(MyBands.data);
// use the setter:
MyBands.data = [...MyBands.data, 'ZZ Top']
console.log(MyBands.data);
// throws an error: MyBands.data = ['Van Halen', 5150]
// because 5150 is not a string

