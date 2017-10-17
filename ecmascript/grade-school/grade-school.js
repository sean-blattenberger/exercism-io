export default class School {
  constructor() {
    this.studentLog = {};
  }

  roster() {
    return JSON.parse(JSON.stringify(this.studentLog));
  }

  grade(num) {
    return this.studentLog[num] ? JSON.parse(JSON.stringify(this.studentLog[num])) : [];
  }

  add(name, grade) {
    if (this.studentLog[grade]) {
      this.studentLog[grade].push(name);
      this.studentLog[grade].sort();
    } else {
      this.studentLog[grade] = [name];
    }
  }
}
