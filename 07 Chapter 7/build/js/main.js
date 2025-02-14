"use strict";
// Index Signatures
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    // you can include more properties, even though they are not included in the interface above:
    Dave: 42
};
// standard way of accessing properties
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
// dynamically accessing properties
let prop = 'Pizza';
// does not work as there is no index signature defined:
//console.log(todaysTransactions[prop]);
// this does work with an index signature, defined in line 11:
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// this works as long as the property is not readonly
todaysTransactions.Pizza = 40;
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
// the following is not a problem, as an index signature is defined:
//console.log(student.test);
// how to iterate over an object without a definition of an index signature:
// use "keyof" which creates a union type of existing properties to loop over an object.
for (const key in student) {
    // using an assertion (see chapter 4), creates a union type which is the specific string literal (union of name, GPA, and classes) to loop through the object:
    console.log(`${key}: ${student[key]}`);
}
// variation of the example above:
Object.keys(student).map(key => {
    console.log(student[key]);
});
// The keyof operator in TypeScript is used to derive new types from an existing object type's keys. It is a TypeScript construct commonly used as a building block in generating advaced types from a source object type.
// another example of keyof using a function:
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
// you need to use keyof here even though the Record utility type was used when defining the different Streams types
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
