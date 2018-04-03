const accumulate = (arr, fn) => {
  let result = [];
  for (let element of arr) {
    result.push(fn(element));
  }
  return result;
}

export default accumulate;