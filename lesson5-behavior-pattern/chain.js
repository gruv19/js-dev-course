/* 1-ый способ */
/*
function processing (name) {
  stepOne(name);
}

function stepOne(name) {
  
  if (name == 'Step 1') {
    console.log(`${name} handler fired`);
  } else {
    stepTwo(name);
  }
}

function stepTwo(name) {
  
  if (name == 'Step 2') {
    console.log(`${name} handler fired`);
  } else {
    stepThree(name);
  }
}

function stepThree(name) {
  
  if (name == 'Step 3') {
    console.log(`${name} handler fired`);
  } else {
    console.error(`Handler for value "${name}" not found`);
  }
}

processing('Step 1');
processing('Step 2');
processing('Step 3');
processing('Step 4');
*/

/* 2-ый способ */
/*
class Middlewarer {
  constructor() {
    this.handlers = [];
  }
  
  dispatch (arg) {
    for (const handler of this.handlers) {
      const res = handler(arg);

      if (res === false) {
        break;
      }
    }
  }

  use (handler) {
    this.handlers.push(handler);
  }
}

const server = new Middlewarer;

server.use(name => {
  if (name == 'Step 1') {
    console.log(`${name} handler fired`);
    return false;
  }
});
server.use(name => {
  if (name == 'Step 2') {
    console.log(`${name} handler fired`);
    return false;
  }
});
server.use(name => {
  if (name == 'Step 3') {
    console.log(`${name} handler fired`);
    return false;
  }
});

server.use(name => {
  console.log(`Handler for value "${name}" not found`);
});

server.dispatch('Step 1');
server.dispatch('Step 2');
server.dispatch('Step 3');
server.dispatch('Step 4');
*/

/* 3-ий способ */

/*class Country {
  constructor (label, cost, buff) {
    this.label = label;
    this.cost = cost;
    this.buff = buff;
  }
}

class TravelAgency {
  constructor () {
    this.countries = [];
  }

  add(country) {
    this.countries.push(country);
  }

  buyTicket(money) {
    let res = [];
    for (const country of this.countries) {
      if (country.cost <= money && country.buff > 0) {
        country.buff--;
        money -= country.cost;
        res.push(country);
      }
    }
    return res;
  }
}

const ta = new TravelAgency;

ta.add( new Country('США', 100, 5) );
ta.add( new Country('Австралия', 150, 2) );
ta.add( new Country('Чехия', 50, 3) );

console.log(ta.buyTicket(200));*/

/* 4-ый способ */

class Country {
  constructor (label, cost, buff) {
    this.label = label;
    this.cost = cost;
    this.buff = buff;
    this.next = null;
  }
}

class TravelAgency {
  constructor() {
    this.first = null;
  }

  get last () {
    if (this.first === null) {
      return unll;
    }

    let current = this.first;

    while (current.next !== null) {
      current = current.next;
    }
    return current;
  }
  
  add (country) {
    if (this.first === null) {
      this.first = country;
    } else {
      this.last.next = country;
    }
  }

  buyTicket (money) {
    let current = this.first;
    let res = [];
    while (current) {
      if (current.cost <= money && current.buff > 0) {
        current.buff--;
        money -= current.cost;
        res.push(current);
        delete res[res.length - 1].next;
      }
      current = current.next;
    }
    return res;
  }
}

const ta = new TravelAgency;

ta.add( new Country('США', 100, 5) );
ta.add( new Country('Австралия', 150, 2) );
ta.add( new Country('Чехия', 50, 3) );

// console.log(ta);
console.log(ta.buyTicket(200));