console.log('!!!-----------------------START-----PROGRAM-------------------------!!!');

class Person {
  constructor (name, family) {
    this.name = name;
    this.family = family;

    this.speaker = new Speaker(this);
    this.walker = new Walker(this);
  }
}

class Speaker {
  constructor (user) {
    this.user = user;
  }

  greeting () {
    return `Hi! I'm ${this.user.family} ${this.user.name}!`
  }
}

class Walker {
  constructor (user) {
    this.user = user;
  }

  run() {
    return `${this.user.name} run sprint!`;
  }
}

const pers1 = new Person('Ivan', 'Ivanov');
console.log(
  pers1.speaker.greeting(),
  pers1.walker.run()
);