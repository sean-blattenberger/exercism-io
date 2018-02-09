class Acronyms {
  static parse(str) {
    return str.split(/[\s|\-]/).map((e, i) => {
      let words = e.match(/[A-Z]+[a-z]+/g) ? e.match(/[A-Z]+[a-z]+/g) : '';
      if (words.length > 1) {
        return words.map((e, i) => {
          return e[0];
        }).join('');
      }
      return e[0].toUpperCase();
    }).join('');
  }
}

export default Acronyms;