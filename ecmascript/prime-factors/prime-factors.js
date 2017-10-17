class PrimeFactors {

  for(num) {
    let factor = 2;
    let factors = [];
    if (num == 1) {
      return factors;
    }
    while (Math.pow(factor, 2) <= num) {
      while (num % factor == 0) {
        factors.push(factor);
        num /= factor;
      }
      factor += factor == 2 ? 1 : 2;
    }
    if (num != 1) {
      factors.push(num);
    }
    return factors;
  }
}
export default PrimeFactors;