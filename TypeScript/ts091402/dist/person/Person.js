"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePerson = exports.Person = void 0;
let MAX_AGE = 100;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
exports.Person = Person;
function makeRandomNumber(max = MAX_AGE) {
    return Math.ceil(Math.random() * max);
}
const makePerson = (name, age = makeRandomNumber()) => ({ name, age });
exports.makePerson = makePerson;
//# sourceMappingURL=Person.js.map