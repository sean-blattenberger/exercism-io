// - If the number has 3 as a factor, output 'Pling'.
// - If the number has 5 as a factor, output 'Plang'.
// - If the number has 7 as a factor, output 'Plong'.
// - If the number does not have 3, 5, or 7 as a factor,
//   just pass the number's digits straight through.

class Raindrops {
  constructor() {
    this.convertString = '';
  }
  convert(num) {
    this.convertString = '';
    if (num % 3 == 0) this.convertString += 'Pling';
    if (num % 5 == 0) this.convertString += 'Plang';
    if (num % 7 == 0) this.convertString += 'Plong';
    return this.convertString.length > 0 ? this.convertString : num.toString();
  }
}

export default Raindrops;