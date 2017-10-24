export default class Triangle {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  kind() {
    if (this.invalidTriangle()) {
      throw new Error('Not a valid triangle');
    } else if (this.equilateral()) {
        return 'equilateral';
    }
    else if (this.isosceles()) {
      return 'isosceles';
    }
    return 'scalene';
  }
  isosceles() {
    return this.x == this.y || this.y == this.z || this.z == this.x;
  }
  equilateral() {
    return this.x == this.y && this.y == this.z;
  }
  invalidTriangle() {
    return (
      this.x + this.y <= this.z ||
      this.x + this.z <= this.y ||
      this.y + this.z <= this.x ||
      (this.x < 0 || this.y < 0 || this.z < 0) ||
      (this.x === 0 && this.y === 0 && this.z === 0)
    );
  }
}
