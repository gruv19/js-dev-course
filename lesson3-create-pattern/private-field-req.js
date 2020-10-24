const Person = require('./private-field-exp');

const person = new Person('Inav', 'Ivanov', 22, 'мужской');
person.greeting();
person.getSex();
console.log(person);