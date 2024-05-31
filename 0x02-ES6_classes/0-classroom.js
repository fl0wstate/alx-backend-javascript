export default class ClassRoom {
  constructor(maxStudentsSize) {
    if (maxStudentsSize && typeof maxStudentsSize === 'number') {
      this._maxStudentsSize = maxStudentsSize;
    }
  }
}
