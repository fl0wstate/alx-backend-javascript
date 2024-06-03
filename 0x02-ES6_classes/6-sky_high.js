import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floor) {
    super(sqft);
    this._floor = floor;
  }

  get() {
    return this._floor;
  }

  evacuationWarningMessage() {
    console.log(`Evacuate slowly the ${this._floor} floors.`);
  }
}
