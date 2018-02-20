class Sorter {
  constructor() {
 this.mass=[];

  }

  add(element) {
this.mass.push(element);
  }

  at(index) {
return this.mass[index];
  }

  get length() {
return this.mass.length;

  }

  toArray() {
return this.mass;
  }

  sort(indices) {

  }

  setComparator(compareFunction) {

  }
}
module.exports = Sorter;