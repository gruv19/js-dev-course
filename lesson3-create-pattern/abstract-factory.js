class Candy {
  constructor() {
    this.type = 'Конфеты';
  }
};
class Soda {
  constructor() {
    this.type = 'Газировка';
  }
};
class BBQ {
  constructor() {
    this.type = 'Стэйки';
  }
};
class Wine {
  constructor() {
    this.type = 'Вино';
  }
};

class ChildrenHolidayFactory {
  makeFood() {
    return new Candy();
  }

  makeDrink() {
    return new Soda();
  }
}

class AdultsHolidayFactory {
  makeFood() {
    return new BBQ();
  }

  makeDrink() {
    return new Wine();
  }
}

function makeHolidayFun(food, drink) {
  console.log(`Тут весело! У нас есть ${food.type} и ${drink.type}`)
}

//child
{
  const factory = new ChildrenHolidayFactory;
  const food = factory.makeFood();
  const drink = factory.makeDrink();
  
  makeHolidayFun(food, drink);
}

{
  const factory = new AdultsHolidayFactory;
  const food = factory.makeFood();
  const drink = factory.makeDrink();
  
  makeHolidayFun(food, drink);
}


//adult