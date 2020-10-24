console.log('!!!-----------------------START-----PROGRAM-------------------------!!!');

class Good {
  constructor (label, price) {
    this.label = label;
    this.price = price;
  }
}

class Composite {
  constructor (label) {
    this.label = label;

    this.items = [];
  }

  add (item) {
    this.items.push(item);
  }

  get price () {
    return this.items.reduce((p, e) => p + e.price, 0);
  }
}

const products = new Composite('Products');
products.add(new Good('Apple', 10));
products.add(new Good('Orange', 20));
products.add(new Good('Milk', 8));

const sports = new Composite('Sports');
sports.add(new Good('Ball', 30));
sports.add(new Good('Sneaker', 50));

const basket = new Composite('Basket');
basket.add(products);
basket.add(sports);
basket.add(new Good('Car', 1000));

console.log(`Price of "${products.label}" is ${products.price}`);
console.log(`Price of "${sports.label}" is ${sports.price}`);
console.log(`Price of "${basket.label}" is ${basket.price}`);