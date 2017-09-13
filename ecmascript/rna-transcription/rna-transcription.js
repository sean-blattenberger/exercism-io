
class Transcriptor {

  toRna(dna) {
    let dnaComplements = {
      'G': 'C',
      'C': 'G',
      'T': 'A',
      'A': 'U'
    }


    //Error function for invalid input
    function _throwError() {
      throw new Error('Invalid input DNA.');
    }

    /*
    * Ternary conditional: if argument contains any letter outside of the valid dna inputs,
    * throw an error. Else run map function and return rna compliments
    */
    return dna.match(/[^GCTA]/g) != null ? _throwError() : [...dna].map(function (e, i) {
      return dnaComplements[e];
    }).join('');

  }
}

export default Transcriptor;