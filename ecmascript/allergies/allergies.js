const allergyChart = { 1: 'eggs', 2: 'peanuts', 4: 'shellfish', 8: 'strawberries', 16: 'tomatoes', 32: 'chocolate', 64: 'pollen', 128: 'cats' };

export default class Allergies {
  constructor(allergyScore) {
    this.allergyScore = allergyScore;
    this.allergyList = [];
  }
  list() {
    let score = this.allergyScore;
    while (score > 0) {
      let currScore = Math.pow(2, Math.floor(Math.log2(score)));
      if (allergyChart[currScore]) this.allergyList.push(allergyChart[currScore]);
      score -= currScore;
    }
    return this.allergyList.reverse();
  }
  allergicTo(food) {
    return this.list().includes(food);
  }
}