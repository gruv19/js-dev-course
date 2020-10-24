/*
Задание №2 (*)
Напишите несколько классов мостов к главному классу Shop: Good, Client, Room.
*/
/*
class mDevice {
  constructor(type) {
    this.type = type;
    this.state = 'disable';
    this.channel = 1;
    this.volume = 0;
  }

  setChannel(value) {
    console.log(`Канал переключается с ${this.channel} на ${value}`);
    this.channel = value;
  }

  getChannel() {
    return this.channel;
  }

  setVolume(value) {
    console.log(`Громкость изменяется с ${this.volume} на ${value}`);
    this.volume = value;
  }

  getVolume() {
    return this.volume;
  }

  enable() {
    this.state = 'enable';
  }

  disable() {
    this.state = 'disable';
  }

  getState() {
    return this.state;
  }
}

class Tv extends mDevice {
  constructor() {
    super('TV');
    this.remote = new Remote(this);
  }
}

class Radio extends mDevice {
  constructor() {
    super('Radio');
    this.remote = new Remote(this);
  }
}


class Remote {
  constructor(device) {
    this.device = device;
  }

  toggleState() {
    if (this.device.getState() === 'enable') {
      return this.device.disable();
    }
    if (this.device.getState() === 'disable') {
      return this.device.enable();
    }
  }

  volumeUp() {
    return this.device.setVolume( this.device.getVolume() + 1 );
  }

  volumeDown() {
    return this.device.setVolume( this.device.getVolume() - 1 );
  }

  channelUp() {
    return this.device.setChannel( this.device.getChannel() + 1 );
  }

  channelDown() {
    return this.device.setChannel( this.device.getChannel() - 1 );
  }
}

const tv = new Tv;
console.log(tv);

tv.remote.toggleState();
tv.remote.volumeUp();
tv.remote.volumeUp();
tv.remote.volumeUp();
tv.remote.channelUp();
tv.remote.channelUp();
console.log(tv);

tv.remote.volumeDown();
tv.remote.channelDown();
tv.remote.toggleState();
console.log(tv);
*/

/*
Задание №3 (*)
Напишите класс Composite для групировки и такому же просто доступу 
к полям для всей группировки разом. 
Покажите возможность древовидной структуры.
 */

/*class Soldier {
  constructor(name, rank) {
    this.name = name;
    this.rank = rank;
    this.getOrders = [];
    this.giveOrders = [];
  }

  showGetOrders() {
    return this.getOrders;
  }

  showGiveOrders() {
    return this.giveOrders;
  }

  getOrder(order) {
    this.getOrders.push(order);
  }

  giveOrder(order) {
    return {
      name: this.name,
      rank: this.rank,
      order: order
    }
  }  
}

let res = '';

class ArmyComposite {
  constructor(name) {
    this.name = name;
    
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  get allGetOrders() {
    for (let item of this.items) {
      if (!(item instanceof ArmyComposite)) {
        let soldierOrders = item.showGetOrders();
        if(soldierOrders.length > 0) {
          for (let order of soldierOrders) {
            //console.log(`${order.rank} ${order.name} приказал ${order.order}`);
            res += `${order.rank} ${order.name} приказал "${order.order}". Исполняет приказ - ${item.rank} ${item.name}.\n`;
          }
        }
      } else {
        item.allGetOrders;
      }
    }
    return res.substr(0, res.length - 1);
  }
}

const vzvod1 = new ArmyComposite('Взвод 1-ый');
vzvod1.add(new Soldier('Аев', 'Рядовой'));
vzvod1.add(new Soldier('Бэев', 'Рядовой'));
vzvod1.add(new Soldier('Вэев', 'Рядовой'));

const vzvod2 = new ArmyComposite('Взвод 2-ый');
vzvod2.add(new Soldier('Дэев', 'Рядовой'));
vzvod2.add(new Soldier('Еев', 'Рядовой'));
vzvod2.add(new Soldier('Жэев', 'Рядовой'));

const vzvod3 = new ArmyComposite('Взвод 3-ый');
vzvod3.add(new Soldier('Зэев', 'Рядовой'));
vzvod3.add(new Soldier('Иев', 'Рядовой'));
vzvod3.add(new Soldier('Кэев', 'Рядовой'));

const rota = new ArmyComposite('Рота 1-ая');
rota.add(vzvod1);
rota.add(vzvod2);
rota.add(vzvod3);
rota.add(new Soldier('Лейтенантов', 'Лейтенант'));

rota.items[0].items[0].getOrder(
  rota.items[3].giveOrder('Поймать шпиона')
);

rota.items[1].items[2].getOrder(
  rota.items[3].giveOrder('Донести важное сообщение штабу')
);

rota.items[2].items[1].getOrder(
  rota.items[3].giveOrder('Проникнуть в тыл врага')
);

rota.items[0].items[1].getOrder(
  rota.items[3].giveOrder('Почистить оружие')
);

rota.items[0].items[2].getOrder(
  rota.items[3].giveOrder('Сварить еду на всю роту')
);

console.log(vzvod1);
console.log(vzvod2);
console.log(vzvod3);
console.log(rota);

console.log(rota.allGetOrders);*/

/*
Создайте класс с простым интерфейсом. 
Создайте от 3-х классов оберток в качестве декораторов к исходному классу. 
Покажите как изменяется поведение экземпляра в каждой обертке и во всех обертках сразу.
*/

/*class Notifier {
  constructor (address, message) {
    this.address = address;
    this.message = message;
  }

  sendMessage() {
    return `"${this.message}" отправлено на email "${this.address}"`;
  }

}

class SMS {
  constructor (notifier, number) {
    this.notifier = notifier;
    this.number = number;
  }

  sendMessage() {
    return `"${this.notifier.message}" отправлено по SMS на номер "${this.number}"`;
  }
}

class FacebookNotifier {
  constructor (notifier, facebookId) {
    this.notifier = notifier;
    this.facebookId = facebookId;
  }

  sendMessage() {
    return `"${this.notifier.message}" отправлено пользователю Facebook - ID="${this.facebookId}"`;
  }
}

const notifier = new Notifier('grv@mail.ru', 'Возникла проблема с сервером 10.0.0.100');
const sms = new SMS(notifier, '8-908-888-00-99');
const facebook = new FacebookNotifier(notifier, '8276192081');
console.log(notifier.sendMessage());
console.log(sms.sendMessage());
console.log(facebook.sendMessage());*/

/*
Организуйте систему классов школы с разнообразными интерфесами. Создайте фасад для упрощенного управления всем семейством этих классов.
*/

/*class Course {
  constructor(name) {
    this.name = name;
    this.state = 'не пройден';
  }

  endCourse() {
    this.state = 'пройден';
  }
}

class Program {
  constructor(name) {
    this.name = name;
    this.courses = [];
  }

  addCourse(course) {
    this.courses.push(new Course(course));
  }

  findCourse(course) {
    return this.courses.findIndex((el, i, arr) => {
      if (el.name == course) return true;
      else return false;
    });
  }
}

class Journal {
  constructor(course, rating) {
    this.course = course;
    this.rating = rating;
  }
}

class School {
  constructor(student) {
    this.student = student;
    this.programs = [];
    this.journal = [];
  }

  addProgram(name, courses) {
    let tmp = new Program(name);
    for (let course of courses) {
      tmp.addCourse(course)
    }
    this.programs.push(tmp);
  }

  endCourse(name, rate) {
    for (let program of this.programs) {
      let i = program.findCourse(name); 
      if (i >= 0) {
        let course = program.courses[i];
        course.endCourse();
        let tmp = new Journal(course, rate);
        this.journal.push(tmp);
      }
    }
  }

  get progress() {
    let message = `Прогресс студента ${this.student} \n\n`;
    for (let prg of this.programs) {
      message += `По программе обучения "${prg.name}":\n`;
      //console.log(prg.name);
      for (let crs of prg.courses) {
        message += `\tКурс "${crs.name}" статус "${crs.state}"`;
        let i = this.journal.findIndex((el, idx, arr) => el.course.name === crs.name ? true : false);
        message += i >= 0 ? ` оценка: ${this.journal[i].rating}\n` : '\n';
      }
      message += `\n`;
    }
    console.log(message);
  }
}

const ruslan = new School('Руслан');
ruslan.addProgram('Верстка', ['HTML', 'CSS']);
ruslan.addProgram('Backend', ['NodeJS', 'PHP']);
ruslan.endCourse('CSS', 5);
ruslan.endCourse('PHP', 3);

const ivan = new School('Иван');
ivan.addProgram('Фрэймровки', ['Vue.js', 'React.js', 'Angular']);
ivan.addProgram('Фундаментальные языки', ['C++', 'Java']);
ivan.endCourse('C++', 4);
ivan.endCourse('Java', 4);

ruslan.progress;
ivan.progress;*/

/*
Организуйте класс Transport. Создайте Flyweight по основным полям экземпляра Transport.
*/

/*
class Transport {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
}

class Airplane {
  constructor(type, seets, country) {
    this.type = type;
    this.seets = seets;
    this.country = country;
  }
}

class FlyweightFactory {
  constructor(...categories) {
    this.categories = categories;
    this.items = [];
  }

  add(...params) {
    // let tmpArr = [];
    // params.forEach((el, i) => {
    //   tmpArr.push(this.categories[i].indexOf(el));
    // });
    // this.items.push(tmpArr);
    this.items.push(
      params.map((el, i) => this.categories[i].indexOf(el))
    );
  }

  getItems(className) {
    return this.items.map(item => new className(
      ...item.map((p, i) => this.categories[i][p])
      )
    );
  }

}

const transportFactory = new FlyweightFactory(
  ['грузовой', 'легковой', 'пассажирский'],
  ['красный', 'зеленый', 'синий', 'белый', 'черный']
);
transportFactory.add('грузовой', 'белый');
transportFactory.add('грузовой', 'синий');
transportFactory.add('пассажирский', 'черный');

const airplaneFactory = new FlyweightFactory(
  ['пассажирский', 'грузовой', 'военный'],
  [100, 200, 2, 0],
  ['США', 'Россия', 'Китай', 'Франция']
);
airplaneFactory.add('пассажирский', 100, 'США');
airplaneFactory.add('пассажирский', 200, 'Китай');
airplaneFactory.add('военный', 2, 'Россия');

console.log(airplaneFactory.getItems(Airplane));
console.log(transportFactory.getItems(Transport));
*/

/*
Выплоните задание 6, но сделайте так чтобы категории изначально были пустые 
и динамически наполнялись по мере добавление транспорта в фабрику.
*/

/*class Transport {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
}

class Airplane {
  constructor(type, seets, country) {
    this.type = type;
    this.seets = seets;
    this.country = country;
  }
}

class FlyweightFactory {
  constructor() {
    this.categories = [];
    this.items = [];
  }

  add(...params) {
    params.forEach((p, i) => {
      if (!this.categories[i]) {
        this.categories[i] = [];
      }
      if (!this.categories[i].includes(p)) {
        this.categories[i].push(p);
      }
    });

    this.items.push(
      params.map((el, i) => this.categories[i].indexOf(el))
    );
  }

  getItems(className) {
    return this.items.map(item => new className(
      ...item.map((p, i) => this.categories[i][p])
      )
    );
  }

}

const transportFactory = new FlyweightFactory();
transportFactory.add('грузовой', 'белый');
transportFactory.add('грузовой', 'синий');
transportFactory.add('пассажирский', 'черный');
// console.log(transportFactory);

const airplaneFactory = new FlyweightFactory();
airplaneFactory.add('пассажирский', 100, 'США');
airplaneFactory.add('пассажирский', 200, 'Китай');
airplaneFactory.add('военный', 2, 'Россия');
// console.log(airplaneFactory);

console.log(airplaneFactory.getItems(Airplane));
console.log(transportFactory.getItems(Transport));*/

/*
Поиграем в хакеров. С помощью proxy переопределите методы console за писывайте в localStore все что выводится в консоль. 
///// В HTML-файле!!!
*/