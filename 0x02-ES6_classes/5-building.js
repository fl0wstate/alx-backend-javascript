export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (this.evacuationWarningMessage === undefined) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}

const b = new Building(99);
console.log(b);

class TestBuilding extends Building {}

try {
    new TestBuilding(199)
} catch(err) {
    console.log(err);
}
