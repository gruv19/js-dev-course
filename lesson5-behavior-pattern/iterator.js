/*class OwnArray extends Array {
  [Symbol.iterator] () {
    let i = this.length;

    return {
      next: () => {
        return {
          value: this[--i],
          done: i === -1
        }
      }
    };
  }
}

const array = new OwnArray(0, 1, 2, 3, 4, 5);

console.log(array);

for(const item of array) {
  console.log(item);
}*/

class Person {
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

class Iterator {
  constructor (list) {
    this.list = list;
  }

  forEach(handler) {
    for (const [index, person] of this.list.persons.entries()) {
      handler(person, index)
    }
  }
}

const list = new PersonList;

list.add(new Person('Ivan', 'Ivanov'));
list.add(new Person('Petr', 'Petrov'));
list.add(new Person('Semen', 'Semenov'));

const iterator = new Iterator(list);

iterator.forEach((person, index) => {
  console.log(person, index);
});