class Shape {
  constructor(arr = []) {
    this.arr = arr;
  }
  perimeter = () => this.arr.length > 1 ? this.arr.reduce((a, b) => a + b) : 0;
}
// console.log(new Shape([5, 10]).perimeter()); // 15
// console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
// console.log(new Shape().perimeter()); // 0
class Rectangle extends Shape {
  constructor(length = 0, width = 0) {
    super([length, length, width, width]);
    this.length = length;
    this.width = width;
  }
  area = () => this.length * this.width;
}
// console.log(new Rectangle(4, 4).perimeter()); // 16
// console.log(new Rectangle(4, 4).area()); // 16
// console.log(new Rectangle(5, 5).perimeter()); // 20
// console.log(new Rectangle(5, 5).area()); // 25
// console.log(new Rectangle().perimeter()); // 0
// console.log(new Rectangle().area()); // 0
class Triangle extends Shape {
  constructor(sideA = 0, sideB = 0, sideC = 0) {
    super([sideA, sideB, sideC]);
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  area =() => Math.sqrt(this.perimeter() / 2 * (this.perimeter() / 2 - this.sideA) * (this.perimeter() / 2 - this.sideB) * (this.perimeter() / 2 - this.sideC));
}
// console.log(new Triangle(3, 4, 5).perimeter()); // 12
// console.log(new Triangle(3, 4, 5).area()); // 6
// console.log(new Triangle().perimeter()); // 0
// console.log(new Triangle().area()); // 0
function arraySides() {
  const data = [[3, 4], [5, 5], [3, 4, 5], [10], []];
  for (const X of data) {
    obj = null;
    switch (X.length) {
      case 0:
      case 1:
        console.log(`Shape with ${X.length} sides unsupported`);
        break;
      case 2:
        obj = new Rectangle(...X);
        X[0] == X[1] ? identifier = "Square" : identifier = "Rectangle";
        console.log(`${identifier} with sides ${X.toString()} has a perimeter of ${obj.perimeter()} and an area of ${obj.area()}`);
        break;
      case 3:
        obj = new Triangle(...X);
        console.log(`Triangle with sides ${X.toString()} has a perimeter of ${obj.perimeter()} and an area of ${obj.area()}`);
    }
  }
}arraySides();


