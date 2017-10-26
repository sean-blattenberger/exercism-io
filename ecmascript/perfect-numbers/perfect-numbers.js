export default class PerfectNumbers {
  classify(num) {
    if (this.isInvalid(num)) {
      throw new Error('Classification is only possible for natural numbers.');
    }
    let aliquotSum = this.getAliquotSum(num);
    if (aliquotSum == 0 || this.isDeficient(aliquotSum, num)) return 'deficient';
    else if (this.isPerfect(aliquotSum, num)) return 'perfect';
    else if (this.isAbundant(aliquotSum, num))  return 'abundant';
  }
  getFactors(num) {
    let factors = [];
    let i = 0;
    while (i < num) {
      if (num % i == 0) factors.push(i);
      i++;
    }
    return factors;
  }
  getAliquotSum(num) {
    let factors = this.getFactors(num);
    if (factors.length < 1) return 0;
    return factors.reduce((a, b) => a + b);
  }
  isPerfect(aSum, num) { return aSum == num; }
  isAbundant(aSum, num) { return aSum > num; }
  isDeficient(aSum, num) { return aSum < num; }
  isInvalid(num) { return num <= 0; }
}