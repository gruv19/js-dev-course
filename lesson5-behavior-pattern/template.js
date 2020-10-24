class RegisterUser {
  register() {
    const data = this.getData();
    const isCorrect = this.filterData(data);

    if (isCorrect) {
      this.sendData(data)
    } else {
      this.errorHandler(data);
    }

    this.finish();
  }
}


class FormRegister extends RegisterUser {
  getData() {
    return {
      name: 'Ivan'
    };
  }

  filterData(data) {
    return data.name.length > 0;
  }

  sendData(data) {
    console.log('Data send to server', data);
  }

  errorHandler(data) {
    console.log('Some error!', data);
  }

  finish() {
    console.log('User registered');
  }
}


class ManualRegister extends RegisterUser {
  getData() {
    return {
      name: prompt('UserName')
    };
  }

  filterData(data) {
    return data.name.length > 0;
  }

  sendData(data) {
    console.log('Data saved. It will send later', data);
  }

  errorHandler(data) {
    console.log('Some error!', data);
  }

  finish() {
    console.log('User will register soon');
  }
}

(new FormRegister).register();
(new ManualRegister).register();