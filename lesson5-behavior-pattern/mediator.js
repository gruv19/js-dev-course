/* Код без паттерна */
/*class EventEmmiter {
  constructor() {
    this.handlers = {};
  }

  on(name, handler) {
    if (!this.handlers[name]) {
      this.handlers[name] = [];
    }

    this.handlers[name].push(handler);
  }

  emit(name, ...args) {
    if (this.handlers[name]) {
      for (const handler of this.handlers[name]) {
        handler(...args);
      }
    }
  }
}

class Button extends EventEmmiter {
  constructor (label) {
    super();
    this.label = label;
  }

  click (...args) {
    this.emit('click', ...args);
  }
}

class Modal extends EventEmmiter {
  constructor(title) {
    super();

    this.title = title;
    this.opened = false;
  }

  open() {
    if (this.opened) {
      return;
    }
    
    this.opened = true;
    this.emit('open');
  }

  close () {
    if (!this.opened) {
      return;
    }

    this.opened = false;
    this.emit('close');
  }
}

const openButton = new Button('Открыть модальное окно');
const closeButton = new Button('Закрыть модальное окно');
const sendButton = new Button('Отправтить сообщение');

const modal = new Modal('Модальное окно');

openButton.on('click', () => modal.open());;
closeButton.on('click', () => modal.close());

openButton.click();
closeButton.click();

sendButton.on('click', (message = '') => {
  if (message.length < 5) {
    closeButton.click();
    modal.open();
  }
});

sendButton.click('ok');*/

/* Код с паттерном */

class Mediator {
  constructor () {
    this.modal = new Modal('Модальное окно');

    this.modal.on('open', () => console.log('Модальное окно открыли'));
    this.modal.on('close', () => console.log('Модальное окно закрыли'));
  }

  sendMessage (message) {
    if (message.length < 5) {
      this.modal.close();
      this.modal.open('Сообщение не может быть отправлено');
    }
  }

  openWindow() {
    this.modal.open();
  }

  closeWindow() {
    this.modal.close();
  }
}

class EventEmmiter {
  constructor() {
    this.handlers = {};
  }

  on(name, handler) {
    if (!this.handlers[name]) {
      this.handlers[name] = [];
    }

    this.handlers[name].push(handler);
  }

  emit(name, ...args) {
    if (this.handlers[name]) {
      for (const handler of this.handlers[name]) {
        handler(...args);
      }
    }
  }
}

class Button extends EventEmmiter {
  constructor (label) {
    super();
    this.label = label;
  }

  click (...args) {
    this.emit('click', ...args);
  }
}

class Modal extends EventEmmiter {
  constructor(title) {
    super();

    this.title = title;
    this.opened = false;
  }

  open() {
    if (this.opened) {
      return;
    }
    
    this.opened = true;
    this.emit('open');
  }

  close () {
    if (!this.opened) {
      return;
    }

    this.opened = false;
    this.emit('close');
  }
}

const openButton = new Button('Открыть модальное окно');
const closeButton = new Button('Закрыть модальное окно');
const sendButton = new Button('Отправтить сообщение');

const mediator = new Mediator;

openButton.on('click', () => mediator.openWindow());;
closeButton.on('click', () => mediator.closeWindow());
sendButton.on('click', message => mediator.sendMessage(message));

openButton.click();
closeButton.click();

sendButton.click('ok');