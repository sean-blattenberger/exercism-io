const gigasecond = Math.pow(10, 12);

class Gigasecond {
  constructor(day) {
    this.day = day;
  }

  date() {
    return new Date(this.day.getTime() + gigasecond);
  }

}
export default Gigasecond;