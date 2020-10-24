class Singleton {
    constructor () {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        
        this.counter = 0;

        Singleton.instance = this;
    }
}

const s1 = new Singleton;
const s2 = new Singleton;

console.log(s1 === s2); 