export default class Trinary {
  constructor(num) {
    this.tri = num;
  }
  toDecimal() {
    return this.tri.match(/[^0-2]/g) ? 0 : this.tri.split('').reverse().reduce((acc, curr, i) => {
      return acc += curr * (3 ** i);
    }, 0)
  }
}