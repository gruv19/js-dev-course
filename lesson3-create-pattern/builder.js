class Airplane {
  constructor (length, width, height, carryngCapacity, speed, capacity, type, autopilot, color, streamlineRatio) {
    this.length = length;
    this.width = width;
    this.height = height;
    this.carryngCapacity = carryngCapacity;
    this.speed = speed;
    this.capacity = capacity;
    this.type = type;
    this.autopilot = autopilot;
    this.color = color;
    this.streamlineRatio = streamlineRatio;
  }
}

class AirplaneBulider {
  constructor() {
    this.length = 15;
    this.width = 7;
    this.height = 5;
    this.carryngCapacity = 100;
    this.speed = 250;
    this.capacity = 44;
    this.type = 'passenger';
    this.autopilot = true;
    this.color = 'white';
    this.streamlineRatio = 1.1; 
  }

  setLength(value) {
    this.length = value;
    return this;
  }

  setWidth(value) {
    this.width = value;
    return this;
  }

  setHeight(value) {
    this.height = value;
    return this;
  }

  setCarryngCapacity(value) {
    this.carryngCapacity = value;
    return this;
  }

  setSpeed(value) {
    this.speed = value;
    return this;
  }

  setCapacity(value) {
    this.capacity = value;
    return this;
  }

  setType(value) {
    this.type = value;
    return this;
  }

  setAutopilot(value) {
    this.autopilot = value;
    return this;
  }

  setColor(value) {
    this.color = value;
    return this;
  }
  setStreamlineRatio(value) {
    this.streamlineRatio = value;
    return this;
  } 

  getAirplane() {
    return new Airplane(
      this.length,
      this.width,
      this.height,
      this.carryngCapacity,
      this.speed,
      this.capacity,
      this.type,
      this.autopilot,
      this.color,
      this.streamlineRatio 
    );
  }
}

const airplane = new AirplaneBulider;

airplane.setLength(100)
  .setHeight(20)
  .setWidth(200)
  .setCarryngCapacity(150)
  .setType('Грузовой')
  .setSpeed(2000)
  .setCapacity(51)
  .setColor('черный')
  .setStreamlineRatio(1.5)
  .setAutopilot(true)
  .getAirplane();

console.log(airplane);