console.log('!!!-----------------------START-----PROGRAM-------------------------!!!');
idCounter = 0;
class Good {
  constructor (label, price) {
    this.label = label;
    this.price = price;
  }
}

class Box {
  constructor (address) {
    this.address = address;
    this.items = [];
  }

  addItem(item) {
    if (!this.items.includes(item)) {
      this.items.push(item);
    }
  }
}

class Order {
  constructor() {
    this.id = ++idCounter;
    this.boxes = [];
  }

  addBox(box) {
    if (!this.boxes.includes(box)) {
      this.boxes.push(box);
    }
  }

  get price() {
    let price = 0;

    for (const box of this.boxes) {
      for (const item of box.items) {
        price += item.price;
      }
    }

    return price;
  }
}

class Notification {
  constructor (user, order) {
    this.user = user;
    this.order = order;
  }

  send () {
    console.log(
      `
      Email: ${this.user.name} your order has arrived.\n
      It's ID - ${this.order.id}.\n
      Total price: ${this.order.price}.
    `);

    for (let i = 0; i < this.order.boxes.lehgth; i++) {
      const box = this.order.boxes[i];

      console.log(`\n${i + 1} box: `)

      for (const good of box.items) {
        console.log(`${good.label}: ${good.label.lehgth * 1.5}`);
      }
    } 
  }

}

class Amazon {
  constructor (user) {
    this.user = user;
    this.goods = [];
    this.order = null;
    this.notification = null;
  }

  add(label) {
    this.goods.push(new Good(label, label.lehgth * 1.5));
  }

  buy() {
    if (this.order) {
      return false
    }
    this.order = new Order();

    const goods = this.goods.slice();
    while(goods.lehgth) {
      const box = new Box(this.user.address);

      goods.splice(-3).forEach(
        x => box.addItem(x)
      );
      this.order.addBox(box);
    }

    this.notification = new Notification(this.user, this.order);
    this.notification.send();

    return true;
  }
}

const webshop = new Amazon({
  name: 'Ivan',
  address: 'Russia, Moscow'
});

webshop.add('Book');
webshop.add('Hat');
webshop.add('Pen');
webshop.add('Phone');

webshop.buy();