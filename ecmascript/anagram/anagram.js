const isEquivalent = function (a, b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    if (aProps.length != bProps.length) {
        return false;
    }
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
  }
export default class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
  }
  matches(compare) {
    if (!Array.isArray(compare)) {
      compare = [...arguments];
    }
    var testLetters = {};
    var matches = [];
    var main = this.word;
    for(let i = 0; i < this.word.length; i++) {
      testLetters[this.word[i]] ? testLetters[this.word[i]]++ : (testLetters[this.word[i]] = 1)
    }
    compare.forEach(function (e, i) {
      let currentWord = {};
      for (let i = 0; i < e.length; i++) {
        let curr = e.toLowerCase()
        currentWord[curr[i]] ? currentWord[curr[i]]++ : (currentWord[curr[i]] = 1)
      }
      if (isEquivalent(testLetters, currentWord) && main != e.toLowerCase()) {
        matches.push(e);
      }
    });
    return matches;
  }
}


