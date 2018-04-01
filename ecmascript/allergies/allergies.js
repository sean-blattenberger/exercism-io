const allergyChart = {
  1: 'eggs',
  2: 'peanuts',
  4: 'shellfish',
  8: 'strawberries',
  16: 'tomatoes',
  32: 'chocolate',
  64: 'pollen',
  128: 'cats',
};

export default class Allergies {
  constructor(allergyScore) {
    this.allergyScore = allergyScore;
    this.allergyList = [];
  }
  list() {
    if (this.allergyScore < 1) return [];
    let runningCount = this.allergyScore;
    while (runningCount > 0) {
      switch (runningCount) {
        case 1:
          this.allergyList.push('eggs');
          runningCount--;
          break;
        case 2:
          this.allergyList.push('peanuts');
          runningCount -= 2;
          break;
        case 4:
          this.allergyList.push('shellfish');
          runningCount -= 4;
          break;
        case 8:
          this.allergyList.push('strawberries');
          runningCount -= 8;
          break;
        case 16:
          this.allergyList.push('tomatoes');
          runningCount -= 16;
          break;
        case 32:
          this.allergyList.push('choclate');
          runningCount -= 32;
          break;
        case 64:
          this.allergyList.push('pollen');
          runningCount -= 64;
          break;
        case 128:
          this.allergyList.push('cats');
          runningCount -= 2;
          break;
        default:
          return this.allergyList;
      }
    }
    return this.allergyList;
  }
}
