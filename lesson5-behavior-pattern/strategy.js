const ASC = (a, b) => a - b;
const DESC = (a, b) => b - a;
const ABSOLUTE_ASC = (a, b) => Math.abs(a) - Math.abs(b);
const ABSOLUTE_DESC = (a, b) => Math.abs(b) - Math.abs(a);

const numbers = (new Int16Array(10)).map(() => Math.floor(Math.random() * 100) - 50);

console.log(numbers);

console.log('ASC', numbers.sort(ASC));
console.log('DESC', numbers.sort(DESC));
console.log('ABSOLUTE_ASC', numbers.sort(ABSOLUTE_ASC));
console.log('ABSOLUTE_DESC', numbers.sort(ABSOLUTE_DESC));