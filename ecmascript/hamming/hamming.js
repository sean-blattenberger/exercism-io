export default class Hamming {
  compute(strand1, strand2) {
    if (strand1.length != strand2.length) {
      throw new Error('DNA strands must be of equal length.');
    }
    return strand1.split('').filter((e, i) => e != strand2[i]).length;
  }
}
