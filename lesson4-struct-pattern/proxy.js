console.log('!!!-----------------------START-----PROGRAM-------------------------!!!');

class User {
  constructor(name, family) {
    this.name = name;
    this.family = family;
  }

  greeting() {
    console.log(`Всем привет. Я ${this.name} ${this.family}`)
  }
}

/*class ProxyUser {
  constructor(user) {
    this.user = user;
  }

  get name() {
    console.log('Кто-то запросил имя');
  }

  set name(value) {
    console.log(`Кто-то пытается привоить имя "${value}" пользователю.`);
    return this.user.name = value;
  }

  greeting() {
    console.log('Кто-то пытается вызвать метод "greeting"');
    return this.user.greeting();
  }
}

const user = new ProxyUser(new User('Руслан', 'Грушев'));*/

const user = new Proxy(
  new User('Руслан', 'Грушев'),
  {
    get: function(target, name, receiver) {
      console.log(`Кто-то запросил ${name}`);
      console.log(receiver);

      return target[name] !== undefined ? target[name] : `"${name}" не существует!`;
    }
  }
);

console.log(
  user.name,
  user.family,
  user.age
);