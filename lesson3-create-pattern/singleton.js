let instance = null;

class Singleton {
  constructor () {
      if (instance) {
          return instance;
      }

      instance = this;
  }
}

const s1 = new Singleton;
const s2 = new Singleton;

console.log(s1 === s2); 