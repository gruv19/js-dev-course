console.log('!!!-----------------------START-----PROGRAM-------------------------!!!');

class Person {
  constructor (name, family) {
    this.name = name;
    this.family = name;
  }

  greeting () {
    return `Hi! I'm ${this.name} ${this.family}!`
  }
}

class Arab {
  constructor (person) {
    this.person = person;
  }

  greeting() {
    return this.person.greeting().split('').reverse().join('');
  }
}

class Evil {
  constructor (person) {
    this.person = person;
  }

  greeting() {
    return this.person.greeting().toUpperCase();
  }
}



const person = new Person('Ivan', 'Ivanov');
console.log(person.greeting());

const arab = new Arab(person);
console.log(arab.greeting()); 

const evil = new Evil(person);
console.log(evil.greeting());

