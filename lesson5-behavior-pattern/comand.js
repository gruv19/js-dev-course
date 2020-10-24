/* Пример без паттерна */

/*class Person {
  constructor (name, family) {
    this.id = Person.idCounter++;
    this.name = name;
    this.family = family;
  }
}

Person.idCounter = 1;

class PersonList {
  constructor () {
    this.persons = [];
  }

  add (person) {
    // const isAdded = this.persons.some(x => x.id === person.id);
    if (!this.persons.includes(person)) {
      this.persons.push(person);
    }
  }
}

const list = new PersonList;

const ivan = new Person('Ivan', 'Ivanov');
const petr = new Person('Petr', 'Petrov');
const semen = new Person('Semen', 'Semenov');

list.add(ivan);
list.add(petr);
list.add(semen);

console.log(list);*/

/* пример с паттерном */

 const ADD_PERSON = 0b00;
const GET_PERSON = 0b01;
const REMOVE_PERSON = 0b10;
const CLEAR_LIST = 0b11;

class Person {
  constructor (name, family) {
    this.id = Person.idCounter++;
    this.name = name;
    this.family = family;
  }
}

Person.idCounter = 1;

class System {
  constructor () {
    this.persons = [];
  }

  dispatch (command) {
    if (command.code === ADD_PERSON) {
      this.persons.push( new Person(command.name, command.family) );
    }

    if (command.code === GET_PERSON) {
      for (const person of this.persons) {
        if (person.id === command.id) {
          return person;
        }
      }
    }

    if (command.code === REMOVE_PERSON) {
      this.persons = this.persons.filter(x => x.id != command.id);
    }

    if (command.code === CLEAR_LIST) {
      this.persons = [];
      return true;
    }

  }
}

const system = new System;

system.dispatch({
  code: ADD_PERSON,
  name: 'Ivan',
  family: 'Ivanov'
});
system.dispatch({
  code: ADD_PERSON,
  name: 'Petr',
  family: 'Petrov'
});
console.log(system.persons);

const person = system.dispatch({
  code: GET_PERSON,
  id: 1
});
console.log(person);

system.dispatch({
  code: REMOVE_PERSON,
  id: 1
});
console.log(system.persons);

system.dispatch({
  code: CLEAR_LIST
});
console.log(system.persons);