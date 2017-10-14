const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const NUMS = '0123456789';
const usedNames = new Set();

export default class Robot {
  constructor() {
    this._name = '';
    this.reset();
  }
  get name() {
    return this._name;
  }
  createName() {
    let letters = '';
    let numbers = '';
    let newName = '';
    while (letters.length < 2) {
      letters += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
    }
    while (numbers.length < 3) {
      numbers += NUMS[Math.floor(Math.random() * NUMS.length)];
    }
    newName = letters.toUpperCase().concat(numbers);
    usedNames.has(newName) ? (newName = this.createName()) : usedNames.add(newName);
    return newName;
  }
  reset() {
    this._name = this.createName();
  }
}
