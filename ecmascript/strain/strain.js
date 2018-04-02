export default class strain {
  static keep(arr, fn) {
    const keepArr = [];
    if (arr.length > 0) {
      for (const num of arr) {
        if (fn(num)) keepArr.push(num);
      }
    } else {
      return keepArr;
    }
    return keepArr;
  }
  static discard(arr, fn) {
    const keepArr = [];
    if (arr.length > 0) {
      for (const num of arr) {
        if (!fn(num)) keepArr.push(num);
      }
    } else {
      return keepArr;
    }
    return keepArr;
  }
}
