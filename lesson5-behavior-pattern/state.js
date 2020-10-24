class Person {
  constructor(name, family, age) {
    this.name = name;
    this.family = family;
    this.age = age;

    this.state ='normal';
  }

  greeting() {
    if (this.state === 'normal') {
      console.log(`Good evening! I'm ${this.name} ${this.family}.`)
    }

    else if (this.state === 'angry') {
      console.log(`I'M ${this.name.toUpperCase()}!!!!`);
    }
  }
}

const person = new Person('Ivan', 'Ivanov', 27);

person.greeting();

person.state = 'angry';

person.greeting();