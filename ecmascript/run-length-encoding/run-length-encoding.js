export function encode(decodedStr) {
  const codeArr = [];
  let currLetter = [];
  if (decodedStr == '') {
    return '';
  }
  for (let i = 0; i <= decodedStr.length; i++) {
    if (currLetter.length < 1) {
      currLetter.push(decodedStr[i]);
    } else if (decodedStr[i] == decodedStr[i - 1]) {
      currLetter.push(decodedStr[i]);
    } else if (currLetter.length == 1) {
      codeArr.push(currLetter[0]);
      currLetter = [];
      currLetter.push(decodedStr[i]);
    } else {
      const letterCount = currLetter.length.toString();
      codeArr.push(letterCount.concat(currLetter[0]));
      currLetter = [];
      currLetter.push(decodedStr[i]);
    }
  }
  return codeArr.length > 0 ? codeArr.join('') : '';
}
export function decode(encodedString) {
  if (encodedString == '') return '';
  const numLetterArr = encodedString.match(/[0-9]+[a-zA-Z\s]|[a-zA-z\s]/g);
  const decodedArr = [];
  numLetterArr.forEach((e, i) => {
    if (e.length > 1) {
      const num = e.match(/[0-9]+/g);
      const letter = e[e.length - 1];
      const tempString = [];
      for (let j = num; j > 0; j--) {
        tempString.push(letter);
      }
      decodedArr.push(tempString.join(''));
    } else {
      decodedArr.push(e);
    }
  });
  return decodedArr.join('');
}