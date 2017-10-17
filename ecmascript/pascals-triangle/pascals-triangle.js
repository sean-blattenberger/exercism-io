export default class Triangle {
  constructor(numRows) {
    this.rows = [];
    if (numRows <= 0) return this.rows;

    let pre = [];
    pre.push(1);
    this.rows.push(pre);

    for (let i = 2; i <= numRows; i++) {
      const cur = [];

      cur.push(1); // first
      for (let j = 0; j < pre.length - 1; j++) {
        cur.push(pre[j] + pre[j + 1]); // middle
      }
      cur.push(1); // last

      this.rows.push(cur);
      pre = cur;
    }

    this.lastRow = this.rows[this.rows.length - 1] || [];
  }
}