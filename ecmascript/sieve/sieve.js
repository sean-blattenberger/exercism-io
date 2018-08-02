export default class Sieve {
  constructor(range) {
    this.range = range;
    this.primes = this.generatePrimes();
  }
  generatePrimes() {
    let curr = 2;
    let primes = [];
    let composites = {};
    while (curr <= this.range) {
      if(!composites[curr]){
        for (let i = curr + 1; i <= this.range; i++) {
          if(i % curr == 0) composites[i] = i;
        }
      }
      curr++;
    }
    // console.log(composites);
    for (let j = 2; j <= this.range; j++) {
      const element = j;
      if(!composites[element]) primes.push(element);
    }
    return primes;
  }
}