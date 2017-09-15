class Pangram {
  constructor(str) {
    this.str = str;

  }

  isPangram() {
    if (!this.str) {
      return false;
    }
    let letterObj = {};
    this.str.toLowerCase().replace(/[^a-z]/g, "").split('').forEach(function (e, i) {
      (!letterObj[e]) ? letterObj[e] = 1 : letterObj[e]++;
    });
    return (Object.keys(letterObj).length === 26);
  }
}

export default Pangram;