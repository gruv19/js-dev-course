class Human {
  recover() {
    console.log('Я здоров!');
  }
}

class Animal {
  recover() {
    console.log('Гав-гав! Виляет хвостом');
  }
}

class Healer {
  treatAPatient() {
    const patient = this.takePatient();
    patient.recover();
  }

  takePatient() {
    throw Error('Вызван абстрактный метод "takePatient"!');
  }
}

class Doctor extends Healer {
  takePatient() {
    return new Human;
  }
}

class Veterinarian extends Healer {
  takePatient() {
    return new Animal;
  }
}

const doctor = new Doctor;
const vet = new Veterinarian;

doctor.treatAPatient();
vet.treatAPatient();
// const healer = new Healer;

// healer.takePatient();

