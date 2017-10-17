const operators = {
  plus: '+',
  minus: '-',
  'multiplied by': '*',
  'divided by': '/',
};
export default class WordProblem {
  constructor(ques) {
    this.ques = ques;
  }
  answer() {
    const simplified = this.ques.slice(8, -1);

    const nums = simplified.match(/\d+|\-\d+/g).map(val => parseInt(val));
    const operations = simplified
      .match(/(minus|plus|multiplied by|divided by)/g)
      .map(val => operators[val]);
    let i = 0;
    let result = nums[0];
    let b;
    let op;
    while (i < nums.length - 1) {
      b = nums[i + 1];
      op = operations[i];

      switch (op) {
        case '-':
          result -= b;
          break;
        case '+':
          result += b;
          break;
        case '*':
          result *= b;
          break;
        case '/':
          result /= b;
          break;
      }

      i++;
    }
    return result;
  }
}

