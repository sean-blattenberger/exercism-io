class Binary {
  constructor(binary) {
    this.binary = binary;
  }
  toDecimal() {
    if (this.binary.match(/[^10]/)) {
      return 0
    }
    let decimalArray = [...this.binary].reverse().map((e, i) => e * Math.pow(2, i));
    return decimalArray.reduce((prev, curr) => prev + curr);
  }
}
export default Binary;