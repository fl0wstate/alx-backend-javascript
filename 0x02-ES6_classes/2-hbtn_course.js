export default class HoldbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
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
    return this._name;
  }

  set length(value) {
    if (Number.isInteger(value)) {
      this._length = parseInt(value, 10);
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
