"use strict";
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
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Dave = new Coder('Dave', 'Rock', 42);
// this works fine
console.log(Dave.getAge());
// both examples do NOT work, you cannot access either property outside of the class
//console.log(Dave.age)
//console.log(Dave.lang)
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
///////////////////////////////////////// 
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
// the count value applies directly to the class, not to individual objects that are instantiated
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Peeps.count); // returns 3
//////////////////////////////////////// 
// getters and setters
// "get" and "set" are special keywords in JS
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value; // getters cannot return a value so return cannot be used here
            return; // empty return statement is OK
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zep'];
// use the getter
console.log(MyBands.data);
// use the setter
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
// throws an error: MyBands.data = ['Van Halen', 5150]
// because 5150 is not a string
