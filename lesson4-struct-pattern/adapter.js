console.log('!!!-----------------------START-----PROGRAM-------------------------!!!');

class DataBase {
  constructor() {
    this.users = [];
  }

  static create (...args) {
    return new DataBase(...args);
  }

  saveNewUserData (user) {
    this.users.push(
      JSON.parse(JSON.stringify(user))
    );
  }

  findOneUserByOwnId (userId) {
    for (const user of this.users) {
      if (user.id === userId) {
        return user;
      }
    }
  }

}

class Adapter {
  constructor(db) {
    this.db = db;
  }

  add (user) {
    this.db.saveNewUserData(user);
  }

  find (userId) {
    return this.db.findOneUserByOwnId(userId);
  }
}

const db = new Adapter(DataBase.create());
console.log(db);

db.add({
  id: 1,
  name: 'Ruslan',
  family: 'Grushev'
});

console.log(
  db.find(1)
);