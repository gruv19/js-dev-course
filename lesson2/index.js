class Person {
    constructor (name, family) {
        this.name = name;
        this.family = family;
    }

    get sayHello() {
        console.log(`hello from ${this.name} ${this.family}`);
    }
    
}
const person1 = new Person('Ruslan', 'Grushev');

person1.sayHello;