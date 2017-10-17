class Matrix {
  constructor(matrix) {
    this.rows = matrix.split('\n').map((row) => {
      return row.split(' ').map((e) => { return parseInt(e) });
    });

    this.columns = Object.keys(this.rows[0]).map(function (colNum) {
      return this.map(function (row) { return row[colNum] });
    }, this.rows);
  }
}
// let mat = new Matrix('9 8 7\n19 18 17');
// console.log(Object.keys(mat.rows.map(function))):

export default Matrix;