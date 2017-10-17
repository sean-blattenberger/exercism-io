export default class PhoneNumber {
  constructor(tele) {
    this.tele = tele;
  }
  number() {
    if (this.tele.length == 11 && this.tele.charAt(0) == '1') {
      return this.tele.split('').slice(1).join('').replace(/[^\d]/g, '')
    } else if (this.tele.replace(/[^\d]/g, '').length != 10 || this.tele.search(/[A-Za-z]/g) != -1) {
      return null;
    }
    return this.tele.replace(/[^\d]/g, '');
  }
}