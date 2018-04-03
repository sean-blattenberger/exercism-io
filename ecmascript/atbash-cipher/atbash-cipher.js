const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const chunk = str => str.match(/.{1,5}/g).join(' '); //Credit @ matthewmorgan
const mapLetters = (letter, i) => {
  return letter.match(/[0-9]/) ? letter : alphabet.split('').reverse()[alphabet.indexOf(letter)];
};
const atbash = {
  encode: code => {
    return chunk(code.toLowerCase().split('').map(mapLetters).join(''));
  }
};
export default atbash;
