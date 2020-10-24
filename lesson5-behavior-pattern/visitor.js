class Visitorable {
  accept (actions) {
    if (actions[this.type]) {
      actions[this.type](this);
    }
  }
}

class Apple extends Visitorable {
  constructor() {
    super();
    this.type = 'apple';
  }

  eat() {
    return 'Хрусь';
  }
}

class Banana extends Visitorable {
  constructor() {
    super();
    this.type = 'banana';
  }

  eat() {
    return 'Омномном';
  }
}


const apple = new Apple;
const banana = new Banana;

const eating = {
  apple (apple) {
    console.log(apple.eat());
  },

  banana (banana) {
    console.log(banana.eat());
  }
};

const makeDrink = {
  apple(apple) {
    console.log('Делаем из яблока сок');
  },
  banana(banana) {
    console.log('Делаем из банана пюре');
  }
}

apple.accept(eating);
banana.accept(eating);
apple.accept(makeDrink);
banana.accept(makeDrink);