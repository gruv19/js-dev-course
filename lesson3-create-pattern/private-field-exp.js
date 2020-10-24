const ageSymbol = Symbol('age');
const collection = new WeakMap;

module.exports = class Person {
  constructor (name, family, age, sex) {
    this.name = name;
    this.family = family;
    this[ageSymbol] = age;
    collection.set(this, {
      sex: sex
    });
  }

  greeting() {
    console.log(`Всем привет! Это ${this.name} ${this.family}`);
  }

  setAge(value) {
    this[ageSymbol] = value;
  }

  getSex() {
    const privateFields = collection.get(this);
    console.log(`Пол: ${privateFields.sex}`);
  }
}
