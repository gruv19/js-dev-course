

/** Factory */

class Person {
  constructor (name, family, age) {
    this.name = name;
    this.family = family;
    this.age = age;
  } 

  static create (...args) {
    return new Person(...agrs)
  }

}

const factory = {
  create (...args) {
    return new Person(...args);
  }
}

const per1 = new Person('Ruslan', 'Grushev', 23);
const per2 = new Person('Oleg', 'olegov', 24);
const per3 = new Person('Ivan', 'Ivanov', 25);

console.log(per1, per2, per3);

