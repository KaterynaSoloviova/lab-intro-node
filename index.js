class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    let i = 0;
    while(i < this.items.length && this.items[i] < item){
      i++;
    }

    this.items.splice(i, 0, item);

    this.length = this.items.length;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }



  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }

    return Math.max(...this.items)
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items)
  }

  sum() {
    if(this.length === 0){
      return 0;
    }
    return this.items.reduce((acc, item)=> acc + item, 0);
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
