class Sorter {
  constructor() {
    this.arr = [];
    this.comparator = (a, b) => a - b;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    indices.sort((a, b) => a - b);
    var newArr = [];
    indices.forEach(element => newArr.push(this.arr[element]));
    newArr.sort(this.comparator);
    newArr.forEach((element, index) => (this.arr[indices[index]] = element));

    return newArr;
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;
