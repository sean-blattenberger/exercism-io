const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const randomKey = function () {
  return [...new Array(100)].map(() => alphabet.charAt(Math.floor(Math.random() * alphabet.length))).join('');
};
class Cipher {
  constructor(key = randomKey()) {
    if (key.length === 0 || key.match(/[A-Z]|[0-9]/)) {
      throw new Error('Bad key');
    }
    this.key = key;
  }

  encode(message) {
    const encoded = [...message].map((letter, index) => {
      const position = alphabet.indexOf(letter);
      const offset = 1 * alphabet.indexOf(this.key[index % this.key.length]);
      const wrap = function (shiftNum, alphabetLength) {
        return ((shiftNum % alphabetLength) + alphabetLength) % alphabetLength;
      }
      return alphabet[wrap(position + offset, alphabet.length)];
    });
    return encoded.join('');
  }

  decode(message) {
    const encoded = [...message].map((letter, index) => {
      const position = alphabet.indexOf(letter);
      const offset = -1 * alphabet.indexOf(this.key[index % this.key.length]);
      const wrap = function (shiftNum, alphabetLength) {
        return ((shiftNum % alphabetLength) + alphabetLength) % alphabetLength;
      }
      return alphabet[wrap(position + offset, alphabet.length)];
    });
    return encoded.join('');
  }
}


export default Cipher;