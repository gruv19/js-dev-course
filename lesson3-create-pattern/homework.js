/*
Напишите класс Zoo с использованием полей, методов, геттеров, сеттеров. 
Реализуйте и прокомментируйте на уровне класса интерфейсы Prototype и паттерт Factory.
*/
/*
class Zoo {
  constructor(name, type, voice) {
    this.name = name;
    this.type = type;
    this.voice = voice;
  }

  getVoice() {
    return `${this.name} сказал "${this.voice}"`;
  }

  get fullInfo() {
    return `Перед нами "${this.name}" из семейства "${this.type}". ${this.name} издает звук "${this.voice}"`;
  }

  set zooName(value) {
    [this.name , this.voice] = value.split(' ');
  }

  clone() {
    return new Zoo(
      this.name,
      this.type,
      this.voice
    );
  }
}

const factory = {
  create(...args) {
    return new Zoo(...args);
  }
};


const fTiger = factory.create('тигр', 'хищник', 'РРРРРРРРР');
const cat = fTiger.clone();

console.log(fTiger.fullInfo);

cat.zooName = 'кот МЯУ';

console.log(cat.fullInfo);
console.log(fTiger.fullInfo);*/