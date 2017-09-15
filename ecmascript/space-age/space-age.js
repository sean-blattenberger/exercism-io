const EARTHYEAR = 31557600;
class SpaceAge {
  constructor(seconds, ageCalc) {
    this.seconds = seconds;
    this.ageCalc = function (ratio, seconds) {
      return parseFloat((seconds / (EARTHYEAR * ratio)).toFixed(2));
    }
  }
  onEarth() { return this.ageCalc(1.0, this.seconds); };
  onMercury() { return this.ageCalc(0.2408467, this.seconds); };
  onVenus() { return this.ageCalc(0.61519726, this.seconds); };
  onMars() { return this.ageCalc(1.8808158, this.seconds); };
  onJupiter() { return this.ageCalc(11.862615, this.seconds); };
  onSaturn() { return this.ageCalc(29.447498, this.seconds); };
  onUranus() { return this.ageCalc(84.016846, this.seconds); };
  onNeptune() { return this.ageCalc(164.79132, this.seconds); };
}
export default SpaceAge;