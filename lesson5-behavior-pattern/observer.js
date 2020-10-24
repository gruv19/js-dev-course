class Observer {
  constructor() {
    this.listeners = [];
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  emit(...args) {
    for (const listener of this.listeners) {
      listener(...args);
    }
  }
}

const story = new Observer;

story.addListener(message => {
  console.log('1-ый обработчик', message);
});

story.addListener(message => {
  console.log('2-ой обработчик', message);
});

story.emit('Какое-то сообщение');