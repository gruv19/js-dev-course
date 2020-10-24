console.log('!!!-----------------------START-----PROGRAM-------------------------!!!');

class Apple {
  constructor(type, color, weight) {
    this.type = type;
    this.color = color;
    this.weight = weight;
  }
}

class FlyweightFactory {
  constructor(...categories) {
    this.categories = categories;
    this.items = [];
  }

  add(...params) {
    this.items.push( params.map((v, i) => this.categories[i].indexOf(v)) );
  }

  get apples() {
    const instance = this;

    return (function * () {
      for (const item of instance.items) {
        yield new Apple(
          ...item.map( (v, i) => instance.categories[i][v] )
        );
      }
    })();
  }
}

const appleFactory = new FlyweightFactory(
  ['Абориген', 'Антоновка', 'Голден', 'Кребы', 'Ренет', 'Чара'],
  ['зеленый', 'красный', 'желтый', 'белый'],
  [100, 200, 300, 400]
);

appleFactory.add('Абориген', 'зеленый', 200);
appleFactory.add('Голден', 'желтый', 100);
console.log(appleFactory);

// console.log(appleFactory);
for (const apple of appleFactory.apples) {
  console.log(apple);
}