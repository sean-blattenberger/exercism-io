export default class Crypto {
  constructor(plainText) {
    this.plainText = plainText;
  }
  normalizePlaintext() {
    return this.plainText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  }
  size() {
    return Math.ceil(Math.sqrt(this.normalizePlaintext(this.plainText).length));
  }
  plaintextSegments() {
    return this.normalizePlaintext(this.plainText).match(
      new RegExp('.{1,' + this.size() + '}', 'g'),
    );
  }
  ciphertext() {
    let words = this.plaintextSegments();
    let cipher = []
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[0].length; j++) {
        if (words[j][i]) cipher.push(words[j][i]);
      }
    }
    return cipher.join('');
  }
}
