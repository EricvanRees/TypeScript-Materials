"use strict";
// Generics are code templates that you can define and reuse throughout your codebase. They provide a way to tell functions, classes, or interfaces what type you want to use when you call it.
// example of a generic function that works for any data type
// this is handy for utility functions when you're not sure what variable type will be passed in
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'John ' }));
console.log(isObj(null));
// if your function needs to do some logic, you might need a generic (see example below):
// The double‑bang operator (!!) is used to typecast values to a strict boolean value (either true or false )
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue([1, 2, 3]));
console.log(isTrue([]));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
console.log(checkBoolValue([1, 2, 3]));
console.log(checkBoolValue([]));
// narrowing the generic type
const processUser = (user) => {
    // process the user with logic here
    return user;
};
console.log(processUser({ id: 1, name: 'Dave' }));
// lacks ID property, so won't run:
// console.log(processUser({name: 'Dave'}));
// a more complex example with extends
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
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
];
console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "firstname"));
//
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
// store.state = 12
const myState = new StateObject([15]);
myState.state = (['Dave', 42, true]);
console.log(myState.state);
