export default class HoldbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value && typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (Number.isInteger(value)) {
      this._length = value;
    } else {
      throw new TypeError('Length must be an integer');
    }
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (value.constructor.name === 'Array') {
      this._students = value;
    } else {
      throw new TypeError('Students must be an array');
    }
  }
}
