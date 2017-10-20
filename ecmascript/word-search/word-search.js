// Transposes columns to rows
function transposeGrid(a) {
  const w = a.length || 0;
  const h = a[0] instanceof Array ? a[0].length : 0;
  if (h === 0 || w === 0) {
    return [];
  }
  let i,
    j,
    t = [];
  for (i = 0; i < h; i++) {
    t[i] = [];
    for (j = 0; j < w; j++) {
      t[i][j] = a[j][i];
    }
  }
  return t;
}

function generateDiagonal(array, bottomToTop) {
  const Ylength = array.length;
  const Xlength = array[0].length;
  const maxLength = Math.max(Xlength, Ylength);
  let temp;
  const returnArray = [];
  for (let k = 0; k <= 2 * maxLength; ++k) {
    temp = [];
    for (let y = Ylength - 1; y >= 0; --y) {
      const x = k - (bottomToTop ? Ylength - y : y);
      if (x >= 0 && x < Xlength) {
        temp.push(array[y][x]);
      }
    }
    if (temp.length > 0) {
      returnArray.push(temp.join(''));
    }
  }
  return returnArray;
}

export default class WordSearch {
  constructor(grid) {
    this.grid = grid;
  }
  find(word) {
    const gridArr = this.grid.map(e => [...e]);
    const transposedGrid = transposeGrid(gridArr);
    const diagonalLeftToRight = generateDiagonal(gridArr);
    const results = {};
    let match;
    for (let i = 0; i < this.grid.length; i++) {
      const rev = word[0]
        .split('')
        .reverse()
        .join('');
      if (this.grid[i].includes(word)) {
        const startIndex = [i + 1, this.grid[i].indexOf(word) + 1];
        const endIndex = [i + 1, word[0].length];
        match = {
          start: startIndex,
          end: endIndex,
        };
        console.log(word[0].length);
        Object.assign(results, { [word]: match });
      } else if (this.grid[i].includes(rev)) {
        const endIndex = [i + 1, this.grid[i].indexOf(rev) + 1];
        const startIndex = [i + 1, word[0].length];
        match = {
          start: startIndex,
          end: endIndex,
        };
        console.log(word[0].length);
        Object.assign(results, { [word]: match });
      }
    }
    for (let i = 0; i < transposedGrid.length; i++) {
      const rev = word[0]
        .split('')
        .reverse()
        .join('');
      if (transposedGrid[i].includes(word)) {
        const startIndex = [transposedGrid[i].indexOf(word) + 1, i + 1];
        const endIndex = [word[0].length, i + 1];
        match = {
          start: startIndex,
          end: endIndex,
        };
        console.log(word[0].length);
        Object.assign(results, { [word]: match });
      } else if (transposedGrid[i].includes(rev)) {
        const endIndex = [transposedGrid[i].indexOf(rev) + 1, i + 1];
        const startIndex = [word[0].length, i + 1];
        match = {
          start: startIndex,
          end: endIndex,
        };
        console.log(word[0].length);
        Object.assign(results, { [word]: match });
      }
    }
    return results;
  }
}
