/*const AnimalPrototype = {
    letVoice() {
        console.log(`${this.name} говорит ${this.voice}! ${this.type} очень милый.`)
    }
}

function Animal(type, voice, name) {
    return {
        type,
        name,
        voice,
        __proto__: AnimalPrototype
    }
}

function Animal (type, voice, name) {
    this.type = type;
    this.voice = voice;
    this.name = name;
}

Animal.prototype.letVoice = function letVoice() {
    console.log(`${this.name} говорит ${this.voice}!`);
}*/

/*class Animal {
    constructor(type, voice, name) {
        this.type = type;
        this.voice = voice;
        this.name = name;
    }

    letVoice() {
        console.log(`${this.name} говорит ${this.voice}!`);
    }
}

class Cat extends Animal {
    constructor(name) {
        super('Кот', 'мяу', name);
    }
}

class Dog extends Animal {
    constructor(name) {
        super('Пес', 'гав', name);
    }
}

const animal = new Animal('Тигр', 'ррррррррррррр', 'Симба');
const cat = new Cat('Барсик');
const dog = new Dog('Мухтар');
animal.letVoice();
cat.letVoice();
dog.letVoice();*/

/*class Manager {
    static create() {
        this.number = 0;
        return this;
    }
    static init(number) {
        this.number = number;
        return this;
    }
    static log() {
        console.log(this.number);
        return this;
    }
    static add(number) {
        this.number += number;
        return this;
    }
    static multi(mult) {
        this.number *= mult;
        return this;
    }
    static reverse() {
        let tmp = +String(this.number).split('').reverse().join('');
        this.number = tmp;
        return this;
    }
}

Manager.create()
    .init(5)
    .log() // 5
    .add(100)
    .log() // 105
    .multi(1.5)
    .log() // 157,5
    .init(10)
    .log() // 10
    .add(113)
    .log()
    .reverse()
    .log() // 321*/

/*class Basket {

    constructor () {
        this.goods = []
    }

    addGood (good) {
        let tmp = this.goods.findIndex((el, i, arr) => {
            if (el.label === good.label) return true;
            else return false;
        });
        console.log(tmp);
        if (tmp >= 0) {
            this.goods[tmp].price += good.price;
            this.goods[tmp].count += good.count;
        } else {
            this.goods.push(good);
        }
    }

    inspect () {
        console.log('Продукт / Количество / Общая цена');
        this.goods.forEach(el => {
            console.log(`${el.label} / ${el.count} / ${el.price}`);
        });
    }

    get totalPrice () {
        let res = 0;
        this.goods.forEach(el => {
            res += el.price;
        });
        return res;
    }

}

const basket = new Basket

basket.addGood({
    label: 'Молоко',
    price: 120,
    count: 1
})

basket.addGood({
    label: 'Печенье',
    price: 43,
    count: 10
})

basket.addGood({
    label: 'Молоко',
    price: 120,
    count: 5
})

basket.inspect()

console.log(basket.totalPrice)*/


