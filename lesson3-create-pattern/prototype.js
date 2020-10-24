class Person {
  constructor (name, family) {
    this.name = name;
    this.family = family;
  }

  greeting() {
    console.log(`Всем привет! Это ${this.name} ${this.family}`);
  }

  clone() {
    return new Person(
      this.name,
      this.family
    );
  }
}

const pers = new Person('Inav', 'Ivanov');
pers.greeting();


// const pers1 = Object.assign({}, pers);
const pers1 = pers.clone();
console.log(pers1);
pers1.greeting();
