class Leap {
  constructor(year) {
    this.year = year
  }
  isLeap() {

    return ((this.year % 4 == 0 && this.year % 100 != 0) || (this.year % 4 == 0 && this.year % 100 == 0 && this.year % 400 == 0));
  }

}
export default Leap;