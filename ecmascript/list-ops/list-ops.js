export default class List {
  constructor(list = []) {
    this._list = list;
  }
  get values() {
    return [...this._list];
  }

  length() {
    return this._list.length;
  }

  reverse() {
    return new List(this._list.reverse());
  }

  append(list) {
    this._list = [...this._list, ...list.values];

    return this;
  }

  concat(list) {
    return new List([...this._list, ...list.values]);
  }

  filter(condition) {
    const newList = [];
    for (let val of this.values) {
      if (condition(val)) {
        newList.push(val);
      }
    }
    return new List(newList);
  }

  map(func) {
    const newList = [];
    for (let val of this.values) {
      newList.push(func(val));
    }
    return new List(newList);
  }

  foldl(func,res) {
    for (let val of this.values) {
      res = func(res, val);
    }
    return res;
  }

  foldr(func,res) {
    for (let i = this.length() - 1; i >= 0; i--) {
      res = func(res, this._list[i]);
    }
    return res;
  }

}