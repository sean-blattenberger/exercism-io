import bigInt from 'big-integer';

export default class Grains {
  square(num) {
    return bigInt(2).pow(num - 1).toString();
  }
  total() {
    let result = bigInt();
    let square = 1;
    while (square <= 64) {
      result = result.add(bigInt(2).pow(square - 1));
      square++;
    }
    return result.toString();

  }
}
