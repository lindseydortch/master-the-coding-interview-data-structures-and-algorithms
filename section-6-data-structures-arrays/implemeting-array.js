class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // access
  get(index) {
    return this.data[index];
  }

  // push - adding to array
  push(item) {
    // object['property] = value
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // pop - remove last item of the array
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // delete - O(n)
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("hi");
newArray.push("you");
newArray.push("!");
console.log(newArray);
newArray.delete(1);
// newArray.pop();
console.log(newArray);
