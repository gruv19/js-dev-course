class Memento {
  constructor() {
    this.history = {};
  }

  getSum() {
    const key = JSON.stringify(arguments);

    if (this.history[key]) {
      return this.history[key];
    }

    return this.history[key] = [].reduce.call(arguments, (a, b) => a + b);
  }
}

const memento = new Memento;

const array = (new Int16Array(1000)).map((e, i) => i + 1);

console.time('first');
memento.getSum(...array);
console.timeEnd('first');

console.time('second');
memento.getSum(...array);
console.timeEnd('second');