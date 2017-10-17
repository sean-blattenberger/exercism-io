export default class Isogram {
  constructor(word) {
    this.word = word;
  }
  isIsogram() {
    const sanitized = this.word.replace(/[^a-zA-Z\u00C0-\u024F]/g, '');
    for (let i = 0; i < sanitized.length; i++) {
      if (sanitized.toLowerCase().indexOf(sanitized[i]) != sanitized.toLowerCase().lastIndexOf(sanitized[i])) { return false; }
    }
    return true;
  }
}
