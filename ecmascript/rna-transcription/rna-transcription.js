
class Transcriptor {
  constructor(dna) {
    this.dna = dna;
  }
  toRna() {
    let dnaComplements = {
      g: 'c',
      c: 'g',
      t: 'a',
      a: 'u'
    }
    return dnaComplements[this.dna];
  }

}
export default Transcriptor;